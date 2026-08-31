# Vercel Deployment Guide

This portfolio is ready to deploy as a Vite React frontend from the repository root.

## Current Project Settings

- Project root on Vercel: repository root
- Install command: `cd frontend && npm ci`
- Build command: `cd frontend && npm run build`
- Output directory: `frontend/dist`
- Environment variables: none required right now

These settings are already stored in `vercel.json`.

## Option 1: Deploy From GitHub

1. Commit and push the latest code to GitHub.
2. Open Vercel and choose `Add New...` > `Project`.
3. Import this GitHub repository.
4. Keep the root directory as the repository root because `vercel.json` is already here.
5. If Vercel asks for settings, use:
   - Framework preset: `Vite`
   - Install command: `cd frontend && npm ci`
   - Build command: `cd frontend && npm run build`
   - Output directory: `frontend/dist`
6. Click `Deploy`.
7. After deployment finishes, open the Vercel URL and test:
   - Home section loads
   - Background video/poster appears
   - Project story cards open
   - Contact links work
   - Mobile layout looks correct

## Option 2: Deploy From CLI

Run these from the repository root:

```bash
npx vercel@latest login
npx vercel@latest
```

For the first deploy, choose:

- Set up and deploy: `Y`
- Scope/account: your Vercel account
- Link to existing project: `N` unless you already created one
- Project name: your choice, for example `arbaan-portfolio`
- Directory: `./`
- Override settings: `N`

After the preview deployment looks correct, publish production:

```bash
npx vercel@latest --prod
```

## Custom Domain

1. Open the project in Vercel.
2. Go to `Settings` > `Domains`.
3. Add your domain.
4. Follow Vercel's DNS instructions.
5. Wait for verification, then test the live domain.
