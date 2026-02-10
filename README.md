# WRAI - How to Run

## Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

## Installation

Install dependencies:

```bash
npm install
```

or

```bash
pnpm install
```

## Running the Application

### Development Mode

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### Build for Production

Build the application:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `src/` - Source code
- `public/` - Static assets
- `content/posts/` - Blog markdown source files
- `package.json` - Dependencies and scripts

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Markdown Blog Workflow

Blog pages are generated at build time from markdown files in `content/posts/`.

### 1) Add a post file

Create a file like:

`content/posts/2026-02-10-why-ai-agents.md`

URL rule:

- slug = filename without `.md`
- page path = `/blog/<slug>`

### 2) Required frontmatter

```md
---
title: "Post title"
date: "2026-02-10"
author: "Sibo"
tags: ["ai", "team"]
summary: "One-line summary"
---
```

### 3) Generated pages

- `/blog` list page (date, tags, title)
- `/blog/:slug` post page (markdown rendered)

### 4) Deployment

The GitHub workflow `.github/workflows/build-to-main.yml` builds from `main` and publishes `dist/` to the `blog` branch.
