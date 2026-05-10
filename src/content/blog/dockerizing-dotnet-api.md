---
title: "Dockerizing Enterprise .NET APIs for Production Deployment"
description: "A practical guide to containerizing .NET APIs with multi-stage builds, ARM-to-x64 cross-compilation, and GitHub Actions CI/CD for AWS ECR deployment."
date: "2026-03-28"
category: "devops"
tags: ["Docker", ".NET", "AWS", "CI/CD", "GitHub Actions"]
---

## Why Containerize .NET APIs?

Every environment should run the same artifact. Docker eliminates "works on my machine" by packaging your API with its exact runtime, dependencies, and configuration into a reproducible image.

For teams deploying to AWS EC2, Docker + ECR gives you versioned, rollback-capable deployments without complex orchestration.

## Multi-Stage Dockerfile

The key to small production images is multi-stage builds:

```dockerfile
# Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY *.sln .
COPY src/ src/
RUN dotnet restore
RUN dotnet publish src/Api/Api.csproj -c Release -o /app

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app .
EXPOSE 8080
ENTRYPOINT ["dotnet", "Api.dll"]
```

The build stage has the full SDK (700MB+). The runtime stage only has the ASP.NET runtime (~200MB). Your final image contains only what's needed to run.

## ARM-to-x64 Cross-Compilation

If your team develops on Apple Silicon (M1/M2/M3) but deploys to x64 Linux servers, you need cross-platform builds:

```yaml
# GitHub Actions
- name: Build and push Docker image
  run: |
    docker buildx build \
      --platform linux/amd64 \
      -t $ECR_REGISTRY/$ECR_REPO:${{ github.sha }} \
      --push .
```

Using `docker buildx` with `--platform linux/amd64` ensures the image runs correctly on your x64 production servers regardless of the build machine's architecture.

## GitHub Actions Pipeline

A complete CI/CD pipeline for .NET + Docker + AWS ECR:

```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: [self-hosted, macOS, ARM64]
    steps:
      - uses: actions/checkout@v4

      - name: Login to ECR
        run: aws ecr get-login-password | docker login --username AWS --password-stdin $ECR_REGISTRY

      - name: Build image
        run: docker buildx build --platform linux/amd64 -t $ECR_REGISTRY/$ECR_REPO:${{ github.sha }} --push .

      - name: Deploy to EC2
        run: |
          ssh $PROD_SERVER "
            docker pull $ECR_REGISTRY/$ECR_REPO:${{ github.sha }}
            docker stop api || true
            docker run -d --name api -p 8080:8080 $ECR_REGISTRY/$ECR_REPO:${{ github.sha }}
          "
```

## ECR Lifecycle Policies

Container registries grow fast. Set lifecycle policies to auto-delete old images:

```json
{
  "rules": [{
    "rulePriority": 1,
    "selection": {
      "tagStatus": "any",
      "countType": "imageCountMoreThan",
      "countNumber": 10
    },
    "action": { "type": "expire" }
  }]
}
```

This keeps only the 10 most recent images, controlling storage costs.

## Health Checks

Always include a health check endpoint and Docker HEALTHCHECK:

```dockerfile
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:8080/health || exit 1
```

This lets Docker (and your deployment scripts) know when the container is actually ready to serve traffic.

## Takeaway

Containerizing .NET APIs isn't complex — it's a multi-stage Dockerfile, a CI pipeline, and a deployment script. The value is in reproducibility: every deployment is the same artifact, every rollback is a `docker run` with a previous tag, and every environment runs identical code.
