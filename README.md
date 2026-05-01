# Sameera Portfolio Website

Professional portfolio and resume website built with Next.js App Router, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- GitHub Actions (CI + optional Vercel deploy)

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Commands

```bash
npm run lint
npm run build
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repository into Vercel.
3. In Vercel, set the project name to `sameeradias` so production URL becomes `https://sameeradias.vercel.app`.
4. Confirm `sameeradias.vercel.app` is assigned as the production domain.
5. The GitHub deploy workflow enforces this exact production URL.
6. Add secrets to GitHub repository for deployment workflow:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

## Git Setup

```bash
git remote add origin <your-github-repo-url>
git push -u origin main
```

## Content Management

Main profile content is stored in:

- `src/content/portfolio-data.ts`

Downloadable resume file:

- `public/Sameera-Roshan-Dias-Resume.txt`

## CI/CD Workflows

- CI checks on pull requests and `main`: lint + build
- Vercel deployment workflow for `main` (requires repository secrets)
