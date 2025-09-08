# Portfolio

This is a personal portfolio website built with **React**, **TypeScript**, and **Vite**. It showcases my projects, social links, and a clean, modern design with a focus on performance and accessibility.

## Features

- **React + TypeScript**: A modern stack for building scalable and maintainable web applications.
- **Vite**: Lightning-fast development and build tool.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **shadcn**: Prebuilt, customizable components styled with Tailwind CSS.
- **Dark Mode**: Theme toggler with support for light, dark, and system themes.
- **Framer Motion**: Smooth animations and transitions.
- **Radix UI**: Accessible and customizable UI components.
- **Responsive Design**: Fully responsive layout for all devices.
- **Dynamic Navigation**: Navigation menu with animated dropdowns.
- **Project Showcase**: Highlight your projects with links to their GitHub repositories.
- **Social Links**: Quick access to your social profiles.

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **UI Components**: shadcn, Radix UI, Lucide Icons
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Linting**: ESLint with TypeScript and React plugins

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   Or

   ```bash
   pnpm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

This will start the Vite development server. Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### Build

To build the project for production:

```bash
npm run build
```

The output will be in the `dist` directory.

### Preview

To preview the production build:

```bash
npm run preview
```

## Project Structure

```plaintext
portfolio/
├── src/
│   ├── components/       # Reusable UI components
│   ├── context/          # Context providers (e.g., ThemeProvider)
│   ├── layouts/          # Layout components
│   ├── pages/            # Page components
│   ├── config/           # Configuration files, mainly used for mapped lists (e.g., projects, socials)
│   ├── router/           # React Router setup
│   ├── types/            # TypeScript type definitions
│   ├── lib/              # Utility functions
│   ├── index.css         # Global styles
│   └── main.tsx          # Application entry point
├── public/               # Static assets
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
├── package.json          # Project metadata and scripts
└── README.md             # What you're reading now :D
```

## Customization

### Adding Projects

To add new projects, update the `src/config/projects.ts` file:

```ts
export const projects: Project[] = [
  {
    name: "New Project",
    description: "A brief description of the project.",
    githubUrl: "https://github.com/username/new-project",
  },
];
```

### Adding Social Links

To add new social links, update the `src/config/socials.tsx` file:

```ts
export const socials: Social[] = [
  {
    Icon: YourIconComponent,
    url: "https://your-social-link",
  },
];
```

## License

This project is licensed under the MIT License.

---

Made with ❤️ by [Ale](https://github.com/stressatoo)
