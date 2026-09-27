<div align="center">

# Bushra Saleh

### SOFTWARE DEVELOPER  |  FULL-STACK & MOBILE  |  JAVASCRIPT

An expressive portfolio for thoughtful digital products, detailed case studies, and
interfaces that are made to be used.

<a href="https://portfolio-omega-ruby-43.vercel.app">View the live portfolio</a>

<br />
<br />

![React](https://img.shields.io/badge/React-18-111111?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-111111?style=flat-square&logo=typescript&logoColor=3178C6)
![Vite](https://img.shields.io/badge/Vite-5-111111?style=flat-square&logo=vite&logoColor=646CFF)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-111111?style=flat-square&logo=tailwindcss&logoColor=06B6D4)

</div>

<br />

## The idea

This is more than a project grid. The site is designed as a guided portfolio experience:
a cinematic home page, focused project pages, a skills view, and a direct way to get in
touch. Each project can unfold into a full case study with context, features,
architecture, implementation details, challenges, and visual walkthroughs.

The visual language is bold and editorial: oversized type, a red accent system, subtle
parallax, magnetic interactions, page transitions, and a rotating 3D portrait moment on
the home page.

## Explore

| Route | What you will find |
| --- | --- |
| `/` | Hero introduction, live Karachi clock, motion, and featured work |
| `/work` | Full project index with categories and interactive previews |
| `/work/:id` | Project detail pages and case studies |
| `/about` | Background, approach, and design perspective |
| `/stack` | Tools and technologies used to build digital products |
| `/contact` | Contact details and a clear next step |

## Selected work

- **SafarGoo** — cross-platform flight and train booking with reliability scoring.
- **CampusConnect** — AWS deployment case study covering VPC, EC2, RDS, IAM, and security groups.
- **MediTrack** — a healthcare experience focused on clearer tracking and patient workflows.
- **Maxis Solar** — a solar energy experience with a product-led visual direction.

The project catalog lives in [`src/data/projects.ts`](src/data/projects.ts), so new work
can be added without changing the page structure.

## Built with

- **React + TypeScript** for the application and typed project data
- **Vite** for fast local development and production builds
- **Tailwind CSS** and **shadcn/ui** for the visual system and reusable UI primitives
- **Framer Motion** for page transitions and interaction choreography
- **React Three Fiber + Three.js** for the interactive 3D hero
- **React Router** for route-based pages and project case studies
- **Lucide** for interface icons

## Run locally

Requires [Node.js](https://nodejs.org/) and npm.

```bash
git clone <your-repository-url>
cd "Bushra Saleh Portfolio"
npm install
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) to view the site.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create the production build in `dist/` |
| `npm run build:dev` | Create a development-mode production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Deployment

The repository includes a [`netlify.toml`](netlify.toml) configured to:

1. Build with `npm run build`.
2. Publish the `dist` directory.
3. Redirect all routes to `index.html` so React Router works on refresh and direct links.

The built site is also suitable for Vercel, GitHub Pages, Cloudflare Pages, or any static
host that supports SPA fallbacks.

## Contact

Interested in building something with care?

**Bushra Saleh** · Web Developer & UI / UX Designer

[Portfolio](https://portfolio-omega-ruby-43.vercel.app) · [GitHub](https://github.com/bushraa09)
