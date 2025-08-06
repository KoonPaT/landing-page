# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio/landing page built with Nuxt 3 and Bootstrap. The site displays personal information, profile image, and social media links.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Generate static site
npm run generate
```

## Architecture

- **Framework**: Nuxt 3 with Vue 3
- **Styling**: Bootstrap 5 with Bootstrap Icons
- **Structure**:
  - `app.vue` - Root application component with NuxtPage router outlet
  - `pages/index.vue` - Main landing page with profile content
  - `nuxt.config.ts` - Nuxt configuration with Bootstrap CSS imports
  - `public/` - Static assets (favicon, robots.txt)
  - `images/` - Profile images and media assets

## Styling Approach

The project uses Bootstrap 5 classes extensively for layout and components. Bootstrap Icons provide social media and UI icons. All Bootstrap CSS is globally imported via nuxt.config.ts.

## Content Structure

The main page (`pages/index.vue`) contains:
- Profile image display with circular styling
- Personal introduction text
- Social media links (Facebook, Instagram, GitHub, Steam)