# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Type
Personal portfolio website built with React, TypeScript, and styled-components. Deployed to GitHub Pages at anthonyjwang.me.

## Commands

### Development
- `npm start` - Run development server on http://localhost:3000
- `npm run build` - Build production bundle to `build/` folder
- `npm test` - Run tests in watch mode
- `npm run deploy` - Build and deploy to GitHub Pages (includes custom domain)

## Architecture

### Tech Stack
- **React 18** with TypeScript
- **styled-components** for styling (v6)
- **react-router-dom** for routing (currently commented out in App.tsx)
- **GitHub Pages** for deployment with custom domain

### Project Structure
The application is a single-page portfolio website with multiple sections rendered on the same page:

- **src/App.tsx** - Main app component that renders all sections sequentially
- **src/pages/** - Page components (Landing, About, Experience, Leadership, Projects)
- **src/components/** - Reusable components (NavBar, Footer)
- **src/styles/** - styled-components definitions:
  - `Global.styles.tsx` - Global styled components
  - `Section.styles.tsx` - Section-specific styles
  - `Experience.styles.tsx` - Experience page styles
  - `breakpoints.ts` - Responsive design breakpoints

### Styling Approach
Uses styled-components throughout the application. All style definitions are in `src/styles/` directory. The project uses TypeScript with styled-components for type-safe styling.

### Deployment
The site is configured to deploy to GitHub Pages with a custom domain (anthonyjwang.me). The deployment process is handled via `gh-pages` package with the custom CNAME configuration.