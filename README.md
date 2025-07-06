🧠 Plan Front






Plan Front is a lightweight task‑planning web application built with React 18, TypeScript, and Vite.It lets you create, view, and organize tasks with a clean and responsive UI.

✨ Demo

Try it out on Netlify 👉 https://plan-front.netlify.app(Demo link is a placeholder – change it to your deployment URL.)

📜 Table of Contents

Features

Tech Stack

Getting Started

Project Structure

Scripts

Roadmap

Contributing

License

Acknowledgments

🚀 Features

✍️ Create new tasks with title & description

🗂️ Organize tasks by status (todo, doing, done)

🔍 Instant search & filtering

📱 Fully responsive (mobile‑first)

⚡ Fast dev server & HMR via Vite

♿ Accessibility‑first design

🌗 Dark / light theme toggle (planned)

🧰 Tech Stack

Category

Tech

Core

React 18 · TypeScript 5 · Vite 5

Styling

Tailwind CSS · PostCSS

Icons

Heroicons · Custom SVG

Linting / Formatting

ESLint · Prettier

Testing

Vitest (planned)

CI / CD

GitHub Actions · Netlify

⚙️ Getting Started

Prerequisites

Node.js ≥16 (LTS recommended)

npm (bundled with Node) or Yarn / pnpm

Installation

# Clone the repository
git clone https://github.com/your-username/plan_front.git
cd plan_front

# Install dependencies
npm install          # or: yarn / pnpm install

Running in Development

npm run dev

Open http://localhost:5173 to view the app.

Building for Production

npm run build        # Generates static assets in ./dist
npm run preview      # Preview the production build locally

🗂 Project Structure

plan_front/
│
├─ public/              # Static assets (favicon, icons, manifest, GIFs…)
│
├─ src/
│   ├─ assets/          # Images & logos
│   ├─ components/      # Reusable React components
│   ├─ hooks/           # Custom React hooks            (future)
│   ├─ pages/           # Routed page components        (future)
│   ├─ types/           # TypeScript typings
│   ├─ utils/           # Helper functions              (future)
│   ├─ App.tsx          # Root component
│   └─ main.tsx         # Application entry
│
├─ .github/             # GitHub config (workflows, issue templates…)
├─ .vscode/             # Editor config (optional)
├─ .eslintrc.cjs
├─ .prettierrc
├─ package.json
├─ tsconfig.json
└─ vite.config.ts

🏃‍♂️ Scripts

Script

Description

dev

Start Vite dev server with HMR

build

Create an optimized production build

preview

Preview the production build locally

lint

Lint all .ts/tsx files with ESLint

format

Format code with Prettier

🛤 Roadmap



Have an idea? Open an issue 💡

🤝 Contributing

Fork the project

Create your feature branch: git checkout -b feat/amazing-feature

Commit your changes: git commit -m "feat: add amazing feature"

Push to the branch: git push origin feat/amazing-feature

Open a Pull Request 📝

Please follow the Conventional Commits specification and make sure npm run lint passes before submitting.

📄 License

Distributed under the MIT License.See LICENSE for more information.

🙏 Acknowledgments

React

Vite

Tailwind CSS

Heroicons

shields.io for the badges
