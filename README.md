🧠 Plan Front
Plan Front is a task management web application built with React, TypeScript, and Vite. It provides a simple and efficient interface to create, view, and manage tasks or plans.

🚀 Getting Started
Follow these steps to set up and run the project locally.

✅ Prerequisites
Node.js (version 16 or later recommended)

npm or Yarn

🛠 Installation
Clone the repository and install dependencies:

bash
Copiar
Editar
git clone https://github.com/your-username/plan_front.git
cd plan_front
npm install
# or
yarn
▶️ Running the App
Start the development server:

bash
Copiar
Editar
npm run dev
# or
yarn dev
Then open http://localhost:5173 in your browser.

📁 Project Structure
graphql
Copiar
Editar
plan_front/
│
├── public/                # Static files (favicon, manifest, etc.)
│   └── icons/             # SVG icons
│
├── src/                   # Source code
│   ├── assets/            # Static assets like images or logos
│   ├── components/        # Reusable React components (e.g. Header, TaskForm, TaskList)
│   ├── types/             # TypeScript types and interfaces
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
│
├── .gitignore             # Files and directories ignored by Git
├── package.json           # Project metadata and dependencies
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration (if applicable)
🔧 Scripts
You can run the following scripts:

npm run dev – Run the app in development mode

npm run build – Create an optimized production build

npm run preview – Preview the production build locally

🧰 Tech Stack
React – Front-end library

TypeScript – Type-safe JavaScript

Vite – Lightning-fast dev server and build tool

Tailwind CSS (inferred) – Utility-first CSS framework

PostCSS – CSS transformations

🚧 Future Improvements
Add user authentication

Persistent storage (e.g., localStorage, Firebase, or backend integration)

Due dates and reminders for tasks

Better accessibility and mobile responsiveness

📝 License
This project is licensed under the MIT License.
