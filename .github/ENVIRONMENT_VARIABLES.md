# Required Repository Secrets and Variables

This repository requires the following GitHub **Actions secrets** for Vercel deployment:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Optional GitHub **variable**:

- `NEXT_PUBLIC_SITE_URL` (default used by app is `https://sameeradias.vercel.app`)

## Where to set

GitHub repository -> Settings -> Secrets and variables -> Actions.

## Recommended values

- `NEXT_PUBLIC_SITE_URL=https://sameeradias.vercel.app`
- Vercel project should use production domain `sameeradias.vercel.app`.
