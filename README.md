## Next.js

[Course](https://nextjs.org/learn/dashboard-app/getting-started)

```sh
npm install -g pnpm
npx create-next-app@latest nextjs-dashboard --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example" --use-pnpm
cd nextjs-dashboard

pnpm i
pnpm dev
pnpm run dev

# Build and run the app in prod mode
pnmp run build
pnpm start
```

- `/app`: Contains all the routes, components, and logic for your application, this is where you'll be mostly working from.
- `/app/lib`: Contains functions used in your application, such as reusable utility functions and data fetching functions.
- `/app/ui`: Contains all the UI components for your application, such as cards, tables, and forms. To save time, we've pre-styled these components for you.
 - `/public`: Contains all the static assets for your application, such as images.
 - Config Files: Most of these files (e.g., `next.config.ts`) are created and pre-configured when you start a new project using `create-next-app`. 

<!-- ### Opt out nextjs telemetry

```sh
pnpm exec next telemetry disable
``` -->

### GitHub

```sh
git config --global user.email ""
git config --global user.name ""

git init
nano .gitignore

# Go to GitHub.com → Settings → Developer Settings → Personal Access Tokens → Tokens (classic)
git remote set-url origin https://YOUR_GITHUB_USERNAME:TOKEN@github.com/mbonum/REPO.git
git config --global credential.helper store

git add .
git commit -m ""
git push -u origin main
```

### Shadcn/ui


```sh
pnpm dlx shadcn@latest add dialog
```
