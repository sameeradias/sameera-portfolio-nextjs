---
title: "Building Scalable APIs with ASP.NET Core Clean Architecture"
description: "How I structure production .NET APIs using clean architecture patterns — domain-driven modules, repository patterns, and middleware-based tenant resolution."
date: "2026-05-01"
category: "backend"
tags: [".NET", "ASP.NET Core", "Clean Architecture", "API Design"]
---

## Why Architecture Matters at Scale

When you're building a single API with 5 endpoints, architecture doesn't matter much. When you're managing 31 controller groups across 18 domain modules serving multiple tenants — it's everything.

This is how I structure production .NET APIs that stay maintainable as they grow.

## The Problem

Most .NET tutorials show you a single-project API with controllers calling DbContext directly. This works for demos but falls apart when:

- Multiple developers work on different domain modules simultaneously
- You need to share contracts between services
- Tenant isolation requires runtime connection string resolution
- Background services need access to the same domain logic

## My Approach: Modular Domain-Driven Structure

```
src/
├── Api/                    # Controllers, middleware, filters
├── Application/            # Use cases, interfaces, DTOs
├── Domain/                 # Entities, value objects, domain events
├── Infrastructure/         # EF Core, external services, email
└── SharedContracts/        # Cross-service event definitions (NuGet)
```

Each domain module (Sales, Inventory, Payroll, etc.) gets its own folder within Application and Domain. Controllers are thin — they validate input and delegate to application services.

## Middleware-Based Tenant Resolution

For multi-tenant systems, I resolve the tenant from the subdomain in middleware:

```csharp
public class TenantMiddleware
{
    public async Task InvokeAsync(HttpContext context)
    {
        var host = context.Request.Host.Host;
        var tenant = await _tenantService.ResolveFromSubdomain(host);
        context.Items["TenantId"] = tenant.Id;
        context.Items["ConnectionString"] = tenant.ConnectionString;
        await _next(context);
    }
}
```

The DbContext then picks up the connection string from HttpContext, ensuring complete data isolation per tenant without any application-level filtering.

## Key Patterns That Scale

**1. Shared Contracts via NuGet**

When multiple services need to communicate, I publish shared event definitions as a NuGet package. This gives type-safe communication without tight coupling.

**2. Permission Caching Middleware**

For RBAC with branch-level permissions, I cache resolved permissions in middleware for sub-100ms authorization checks on every request.

**3. Background Services for Side Effects**

Email notifications, payment reconciliation, and appointment escalation run as hosted services — keeping controllers fast and focused on the request/response cycle.

## Results

This architecture has supported:
- 6 independently deployable services
- 340+ EF Core migrations without breaking changes
- Sub-30-second tenant provisioning
- Zero cross-tenant data leakage

## Takeaway

Clean architecture isn't about following a template — it's about creating boundaries that let your system grow without each change rippling through everything else. Start with clear module boundaries and add complexity only where the domain demands it.
