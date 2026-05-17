# Jamie Powers – Portfolio Site

Vue 3 + Vite portfolio, auto-deployed to GitHub Pages via GitHub Actions.

---

## 🚀 One-Time Setup (15 minutes)

### Step 1 – Create a GitHub repo

1. Go to https://github.com/new
2. Name it: `jamie-powers-portfolio` (or anything you want)
3. Set visibility: **Public** (required for free GitHub Pages)
4. Do NOT initialize with README (you already have files)
5. Click **Create repository**

### Step 2 – Update the base path in vite.config.js

Open `vite.config.js` and change the `base` value to match your exact repo name:

```js
base: '/YOUR-REPO-NAME-HERE/'
```

### Step 3 – Push the code

```bash
cd jamie-powers-portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

### Step 4 – Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **GitHub Actions**
4. Save

### Step 5 – Wait ~2 minutes

GitHub Actions will automatically build and deploy. Your site will be live at:

```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

---

## 🔄 How to Update the Site

Just push to `main` — GitHub Actions handles the rest:

```bash
git add .
git commit -m "Update experience section"
git push
```

Site updates in ~60 seconds.

---

## 💻 Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173/jamie-powers-portfolio/

---

## 🗂 Project Structure

```
jamie-powers-portfolio/
├── src/
│   ├── data/
│   │   └── resume.js          ← ALL your content lives here
│   ├── views/
│   │   ├── Home.vue           ← Main portfolio page
│   │   ├── CompanyDetail.vue  ← Company drill-down
│   │   └── ProjectDetail.vue  ← Project drill-down
│   ├── components/
│   │   └── NavBar.vue
│   ├── router/
│   │   └── index.js
│   ├── App.vue
│   └── main.js
├── .github/
│   └── workflows/
│       └── deploy.yml         ← Auto-deploy on push to main
├── index.html
├── vite.config.js
└── package.json
```

---

## ✏️ How to Edit Content

All content is in `src/data/resume.js`. Edit that file and push — no code changes needed for content updates.

To add a new project under a company:
```js
{
  id: 'my-project',
  name: 'My Project Name',
  description: 'What it was and what you did.',
  tech: ['Python', 'Docker', 'AWS'],
  outcome: 'What was achieved',
  customer: 'Who the customer was'
}
```

---

## 🔑 Credentials Needed

**None beyond GitHub.** GitHub Actions provides `GITHUB_TOKEN` automatically.
No AWS keys. No secrets to configure. Just a public GitHub repo.
