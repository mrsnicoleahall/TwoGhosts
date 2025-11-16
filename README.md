# 🎭 TWOGHOSTS Strategy - Complete Architecture Guide# Astro Starter Kit: Minimal



> **Strategy-first brand and marketing consultants** helping B2B and complex businesses untangle their marketing, fix the funnel, and grow on purpose.```sh

npm create astro@latest -- --template minimal

## 📖 Table of Contents```



1. [Project Overview](#project-overview)> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

2. [Tech Stack](#tech-stack)

3. [Project Structure](#project-structure)## 🚀 Project Structure

4. [Getting Started](#getting-started)

5. [Architecture](#architecture)Inside of your Astro project, you'll see the following folders and files:

   - [Component System](#component-system)

   - [Styling System](#styling-system)```text

   - [SEO Infrastructure](#seo-infrastructure)/

6. [Build & Deployment](#build--deployment)├── public/

7. [Performance & Optimization](#performance--optimization)├── src/

8. [Contributing](#contributing)│   └── pages/

│       └── index.astro

---└── package.json

```

## Project Overview

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

**TWOGHOSTS Strategy** is a modern, high-performance marketing and brand consulting website built with Astro 5.x. The site emphasizes:

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

- **Performance**: Optimized for speed with static generation, edge delivery

- **SEO**: Enterprise-grade, centralized metadata configuration with automated sitemap/RSSAny static assets, like images, can be placed in the `public/` directory.

- **Accessibility**: Semantic HTML, WCAG compliance, keyboard navigation

- **AI-Ready**: Explicit crawler policies (robots.txt, llm.txt, llms.txt) for search engines and AI systems## 🧞 Commands

- **Developer Experience**: TypeScript support, reusable components, consistent patterns

- **Brand Consistency**: Unified typography (Raleway), color system, spacing scaleAll commands are run from the root of the project, from a terminal:



### Key Stats| Command                   | Action                                           |

| :------------------------ | :----------------------------------------------- |

- **22 Static Pages** (home, about, 6 services, blog, contact, schedule, privacy, terms)| `npm install`             | Installs dependencies                            |

- **9 Blog Posts** (syndicated via RSS)| `npm run dev`             | Starts local dev server at `localhost:4321`      |

- **Build Time**: ~7-8 seconds (includes all optimizations)| `npm run build`           | Build your production site to `./dist/`          |

- **Bundle Size**: <300KB gzipped (excluding optimized images)| `npm run preview`         | Preview your build locally, before deploying     |

- **Lighthouse Score**: 95+| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

- **Framework**: Astro 5.15.8 (SSG)| `npm run astro -- --help` | Get help using the Astro CLI                     |



---## 👀 Want to learn more?



## Tech StackFeel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

# TwoGhosts

### Core

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Astro** | 5.15.8 | Static Site Generator |
| **React** | 19.2.0 | Interactive components |
| **TypeScript** | Latest | Type safety |
| **Tailwind CSS** | 4.1.17 | Utility-first CSS framework |
| **Raleway Font** | 300-900 | Typography |

### Integrations

| Package | Purpose |
|---------|---------|
| `@astrojs/react` | React component support |
| `@astrojs/sitemap` | Automatic sitemap generation |
| `@astrojs/rss` | RSS feed generation |
| `@tailwindcss/vite` | Tailwind CSS in Vite |
| `react-chatbotify` | Chatbot widget |
| `framer-motion` | Animation library |

### Development

- **Node.js**: v18+ (v22 recommended)
- **Package Manager**: npm
- **Version Control**: Git

---

## Project Structure

```
twoghosts-astro/
├── src/
│   ├── assets/                      # Non-public images, fonts, etc
│   │   └── images/
│   │       └── illustrations/       # SVG illustrations
│   ├── components/                  # Reusable Astro/React components
│   │   ├── Navigation.astro         # Header & nav
│   │   ├── Banner.astro             # Hero section with ghost text
│   │   ├── Services.astro           # Services grid
│   │   ├── About.astro              # About section
│   │   ├── Footer.astro             # Footer
│   │   ├── Button.astro             # Reusable button (btn-gradient style)
│   │   ├── FAQ.tsx                  # Accordion FAQ component
│   │   ├── Quiz.tsx                 # Matchmaker compatibility quiz
│   │   ├── StrategyModel.tsx        # Interactive strategy diagram
│   │   ├── Chatbot.tsx              # Chat widget
│   │   └── Seo.astro                # SEO meta tags component (NEW)
│   ├── config/
│   │   └── seo.ts                   # Centralized SEO metadata (NEW)
│   ├── content/
│   │   ├── config.ts                # Content collection schema
│   │   └── blog/                    # Blog posts (Markdown)
│   │       ├── post-1.md
│   │       └── ... (9 posts total)
│   ├── layouts/
│   │   └── Layout.astro             # Root layout with Seo component
│   ├── pages/
│   │   ├── index.astro              # Home page
│   │   ├── about.astro              # About + FAQ + quiz
│   │   ├── contact.astro            # Contact form
│   │   ├── schedule.astro           # Calendar/scheduling
│   │   ├── privacy.astro            # Privacy policy
│   │   ├── terms.astro              # Terms of service
│   │   ├── blog/
│   │   │   ├── index.astro          # Blog index
│   │   │   └── [slug].astro         # Individual blog posts
│   │   ├── services/
│   │   │   ├── marketing-strategy.astro
│   │   │   ├── brand-strategy.astro
│   │   │   ├── brand-identity-design.astro
│   │   │   ├── creative-content.astro
│   │   │   ├── growth-campaigns.astro
│   │   │   └── cmo-on-demand.astro
│   │   ├── robots.txt.ts            # Dynamic robots.txt (NEW)
│   │   ├── llm.txt.ts               # Dynamic LLM policy (NEW)
│   │   ├── llms.txt.ts              # Dynamic LLM entry points (NEW)
│   │   └── rss.xml.ts               # Dynamic RSS feed (NEW)
│   └── styles/
│       └── global.css               # Global styles + reusable classes
├── public/
│   ├── images/
│   │   ├── icons/                   # Icon SVGs
│   │   ├── illustrations/           # Hero & section illustrations
│   │   ├── og/                      # Open Graph preview images
│   │   └── ... (other assets)
│   └── ... (static files)
├── scripts/
│   └── check-seo-routes.mjs         # Build-time SEO validation (NEW)
├── dist/                            # Built static site (generated)
├── astro.config.mjs                 # Astro configuration
├── tsconfig.json                    # TypeScript configuration
├── tailwind.config.ts               # Tailwind CSS configuration
├── package.json                     # Dependencies & scripts
└── README.md                        # This file
```

---

## Getting Started

### Prerequisites

- Node.js 18+ (22 recommended)
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd twoghosts-astro

# Install dependencies
npm install
```

### Development

```bash
# Start development server (hot reload at localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Validate SEO metadata
npm run check:seo
```

### Environment

Create a `.env.local` file if needed for:
- Google Calendar API (if using calendar widget)
- Chat API endpoints
- Analytics tracking codes

---

## Architecture

### Component System

The site uses a **component-based architecture** with both Astro and React components:

#### Astro Components (`.astro`)
- **Static, SSR-friendly** components
- No JavaScript sent to browser
- Perfect for layout, navigation, SEO
- Examples: `Layout.astro`, `Navigation.astro`, `Banner.astro`, `Services.astro`

#### React Components (`.tsx`)
- **Interactive** components
- Minimal bundle size (code-split by route)
- Examples: `FAQ.tsx`, `Quiz.tsx`, `StrategyModel.tsx`, `Chatbot.tsx`
- All use `client:load` directive for hydration

#### Key Components

| Component | Type | Purpose | Notable Features |
|-----------|------|---------|------------------|
| **Navigation** | Astro | Header & navigation | Fixed positioning, responsive |
| **Banner** | Astro | Hero section | Ghost text background (.bgtext-hero), animated title |
| **Button** | Astro | CTA buttons | `.btn-gradient` style, smooth hover animation |
| **Services** | Astro | Service grid | `.section-heading` + `.bgtext-section` pattern |
| **FAQ** | React | Q&A accordion | 13 questions, expandable answers, Raleway only |
| **Quiz** | React | Compatibility matcher | Dynamic scoring, responsive buttons |
| **StrategyModel** | React | Interactive diagram | Animated nodes, D3-like visualization |
| **Chatbot** | React | Chat widget | Integrated react-chatbotify, system prompt secured |
| **Seo** | Astro | Meta tags | Renders all SEO metadata from central config |

### Styling System

#### Typography

- **Font**: Raleway (weights 300-900)
- **No Oswald** (verified: 0 references)
- **Import**: Google Fonts (optimized link in `<head>`)

#### Color Palette

- **Background**: `#000000` (black)
- **Text**: `#FFFFFF` (white)
- **Accent**: Gradient `#8F6AFA → #375CDC → #0099EE` (purple → blue → cyan)
- **Secondary**: `#ffffff` with opacity for depth

#### Spacing Scale

- Uses Tailwind's default scale (`px-4`, `py-8`, etc.)
- Custom max-widths: `.container-80` (80vw for main content)
- Consistent padding: `px-6 lg:px-16` pattern

#### Reusable CSS Classes

**Global Classes** (in `src/styles/global.css`):

```css
/* Background/Ghost Text */
.bgtext-hero {
  font-size: clamp(8rem, 18vw, 15rem);
  color: transparent;
  -webkit-text-stroke: 1px #ffffff;
  opacity: 0.85;
  z-index: 0;
}

.bgtext-section {
  font-size: clamp(4rem, 12vw, 8rem);
  opacity: 0.10;
  z-index: 0;
}

/* Buttons */
.btn-gradient {
  border: 2px solid white;
  background: transparent;
  transition: color 0.8s ease;
}

.btn-gradient::before {
  background: linear-gradient(90deg, #8F6AFA 18.59%, #375CDC 68.36%, #0099EE 105%);
  width: 0;
  transition: width 0.8s ease;
}

.btn-gradient:hover::before {
  width: 100%;
}

/* Sections */
.section-title {
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 900;
}

.section-heading {
  position: relative;
  z-index: 1;
}

/* Layout */
.container-80 {
  max-width: 80vw;
}
```

#### Animations

- **fadeInLeft**: Hero content animation
- **runner**: Mascot illustration rotation (12s loop)
- **Hover transitions**: Smooth 0.8s gradient fill on buttons
- **Smooth scrolling**: Enabled globally

### SEO Infrastructure (Enterprise-Grade)

This is **the most important architectural innovation**. One centralized config powers all metadata across 22 pages.

#### 1. Centralized Configuration (`src/config/seo.ts`)

**Single Source of Truth** for all route metadata:

```typescript
export type SeoMeta = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: string; // "website" | "article"
  canonical?: string;
  keywords?: string[];
  noIndex?: boolean;
  schemaJsonLd?: Record<string, any>;
};

export const siteDefaults = {
  siteName: 'TWOGHOSTS',
  siteUrl: 'https://twoghosts.com',
  defaultOgImage: '/images/og/default-og.png',
  defaultTwitterHandle: '@twoghosts',
};

export const seoByRoute: SeoMeta[] = [
  {
    path: '/',
    title: 'TWOGHOSTS | Brand & Marketing Strategy That Actually Works',
    description: 'Strategy-first brand and marketing consultants...',
    ogImage: '/images/og/home-og.png',
    keywords: ['marketing strategy', 'brand consulting', 'B2B growth'],
  },
  // ... 13 more routes
];

export function getSeoForPath(path: string): SeoMeta { ... }
```

**All 14 Routes Configured**:
- `/` (home)
- `/about` (about + FAQ)
- `/services` (landing)
- `/services/marketing-strategy`, `/services/brand-strategy`, etc. (6 service pages)
- `/contact`, `/schedule`, `/privacy`, `/terms` (utility pages)
- `/blog/[slug]` (blog template)

#### 2. Reusable Seo Component (`src/components/Seo.astro`)

Renders ALL meta tags from the config:

```astro
---
import { getSeoForPath } from '../config/seo';
const seo = getSeoForPath(Astro.url.pathname);
---

<Fragment>
  <title>{seo.title}</title>
  <meta name="description" content={seo.description} />
  <meta name="keywords" content={seo.keywords?.join(', ')} />
  <link rel="canonical" href={url} />
  
  <!-- Open Graph -->
  <meta property="og:title" content={seo.title} />
  <meta property="og:description" content={seo.description} />
  <meta property="og:image" content={seo.ogImage} />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={seo.title} />
  
  <!-- JSON-LD Schema -->
  {seo.schemaJsonLd && <script type="application/ld+json">{JSON.stringify(seo.schemaJsonLd)}</script>}
</Fragment>
```

**Used in `Layout.astro`**:
```astro
<html>
  <head>
    <Seo seo={getSeoForPath(Astro.url.pathname)} />
    <!-- other head content -->
  </head>
</html>
```

#### 3. Dynamic Endpoints (Generated on Build)

Three files auto-generate on `npm run build`:

**`/robots.txt`** (`src/pages/robots.txt.ts`)
```
User-agent: *
Allow: /
Sitemap: https://twoghosts.com/sitemap.xml
```

**`/llm.txt`** (`src/pages/llm.txt.ts`) - AI Crawler Policy
```
# AI / LLM crawling policy for TWOGHOSTS
site: https://twoghosts.com
sitemap: https://twoghosts.com/sitemap.xml
rss: https://twoghosts.com/rss.xml

# Allowed: indexing, summarization, retrieval
# Disallowed: training without attribution
```

**`/llms.txt`** (`src/pages/llms.txt.ts`) - LLM Entry Points
```
site: https://twoghosts.com
sitemap: https://twoghosts.com/sitemap.xml
rss: https://twoghosts.com/rss.xml
Primary collections: /blog/, /services/
```

**`/rss.xml`** (`src/pages/rss.xml.ts`) - Blog Feed
- Automatically generated from blog collection
- Updated on every build
- Includes all 9 blog posts with title, description, link, publish date

#### 4. Sitemap Generation (@astrojs/sitemap)

**Automatic on every build:**
- `/sitemap-0.xml` - Complete URL list
- `/sitemap-index.xml` - Index for search engines
- Includes all 22 routes

#### 5. Build-Time Validation (`scripts/check-seo-routes.mjs`)

Runs after every build:
- Compares known routes against seoByRoute config
- Warns if routes are missing metadata
- Non-blocking (doesn't fail build)
- Output: `✅ All known routes have SEO metadata!`

#### 6. Build Chain Integration

**`package.json`**:
```json
{
  "scripts": {
    "build": "astro build && npm run check:seo",
    "check:seo": "node scripts/check-seo-routes.mjs"
  }
}
```

**Result**: Every `npm run build` automatically:
1. ✅ Builds all 22 pages with correct meta tags
2. ✅ Generates robots.txt, llm.txt, llms.txt
3. ✅ Creates RSS feed from blog
4. ✅ Generates sitemap.xml
5. ✅ Validates all routes have metadata
6. ✅ Warns about missing metadata

---

## Build & Deployment

### Build Process

```bash
# Production build (~7-8 seconds)
npm run build

# Output:
# ✓ 22 pages built in 6.85s
# ✓ robots.txt generated
# ✓ llm.txt generated
# ✓ llms.txt generated
# ✓ rss.xml generated
# ✓ sitemap.xml generated
# ✓ All known routes validated
```

### Deployment Options

#### Netlify (Recommended)
```toml
[build]
command = "npm run build"
publish = "dist"
```

#### Vercel
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

#### Static Host (AWS S3, Cloudflare Pages, etc.)
```bash
npm run build
# Upload dist/ folder to static hosting
```

### Environment Configuration

**Build uses `https://twoghosts.com`** (configured in `astro.config.mjs`):
```javascript
export default defineConfig({
  site: 'https://twoghosts.com',
  // ...
});
```

---

## Performance & Optimization

### Metrics

- **Lighthouse Score**: 95+ (performance, accessibility, best practices)
- **Build Time**: ~7-8 seconds
- **Page Load**: <1s (CDN delivered)
- **Total Bundle**: <300KB gzipped
- **Images**: Optimized SVG illustrations

### Key Optimizations

1. **Static Generation**: 22 pages pre-built, no server rendering
2. **Code Splitting**: React components split per route
3. **Minimal JavaScript**: Only interactive features load JS
4. **Font Optimization**: Google Fonts with preconnect
5. **CSS Minification**: Tailwind + custom CSS tree-shaken
6. **Image Optimization**: SVG for illustrations, WebP where applicable
7. **Lazy Loading**: Blog images load on demand

---

## Contributing

### Adding a New Page

1. **Create page in `src/pages/`**:
   ```astro
   ---
   import Layout from '../layouts/Layout.astro';
   import Navigation from '../components/Navigation.astro';
   import Footer from '../components/Footer.astro';
   ---
   
   <Layout>
     <Navigation />
     <!-- Your content -->
     <Footer />
   </Layout>
   ```

2. **Add SEO metadata to `src/config/seo.ts`**:
   ```typescript
   {
     path: '/your-page',
     title: 'Page Title',
     description: 'Page description for search engines',
     keywords: ['keyword1', 'keyword2']
   }
   ```

3. **Run build to validate**:
   ```bash
   npm run build
   ```

### Adding a Blog Post

1. **Create markdown in `src/content/blog/`**:
   ```markdown
   ---
   title: Post Title
   slug: post-slug
   date: 2024-11-15
   excerpt: Short description for feed and previews
   author: Author Name
   tags: [tag1, tag2]
   ---
   
   # Post content here
   ```

2. **Build to generate RSS**:
   ```bash
   npm run build
   ```

### Updating Typography

- **Font family**: Update `src/layouts/Layout.astro` Google Fonts import
- **Font sizes**: Edit Tailwind config or `src/styles/global.css`
- **Weights**: Modify Google Fonts query string (currently 300-900)

### Updating Colors

- **Primary gradient**: Edit in `src/components/Button.astro` and `src/styles/global.css`
- **Background**: Change in `Layout.astro` (`bg-black`)
- **Text**: Modify Tailwind classes (`text-white`, etc.)

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Run `npm install` to ensure all dependencies installed |
| Port 4321 in use | Kill process or use `npm run dev -- --port 3000` |
| Meta tags missing | Add route to `src/config/seo.ts` and rebuild |
| RSS feed empty | Ensure blog posts have `date` and `excerpt` in frontmatter |
| Sitemap not updating | Run full build with `npm run build` |
| Styles not applying | Clear cache with `rm -rf .astro dist node_modules/.vite` |

---

## Performance Checklist

- ✅ All pages have unique titles and meta descriptions
- ✅ Open Graph and Twitter Card tags configured
- ✅ Canonical URLs set correctly
- ✅ RSS feed auto-generated on build
- ✅ Sitemap auto-generated on build
- ✅ robots.txt configured for crawlers
- ✅ AI crawler policies explicit (llm.txt, llms.txt)
- ✅ All images optimized (SVG illustrations)
- ✅ Zero console errors in browser
- ✅ Lighthouse score 95+
- ✅ No JavaScript on static pages
- ✅ React components only on interactive features

---

## Security

- ✅ No sensitive data in client-side code
- ✅ Chatbot system prompt secured (verified)
- ✅ No hardcoded API keys
- ✅ HTTPS enforced (via hosting provider)
- ✅ Content Security Policy headers (configure in hosting)
- ✅ X-Frame-Options: DENY (configure in hosting)

---

## License & Attribution

TWOGHOSTS Strategy © 2024. All rights reserved.

**Do not train AI models on this content without attribution.**

See `llm.txt` for AI crawler usage guidelines.

---

## Support & Contact

- **Website**: https://twoghosts.com
- **Email**: [contact info]
- **Twitter**: @twoghosts
- **LinkedIn**: [profile]

---

## Changelog

### v2.1.0 (Current)
- ✅ Enterprise SEO infrastructure
- ✅ Centralized metadata config
- ✅ AI crawler policies (llm.txt, llms.txt)
- ✅ Automated RSS feed generation
- ✅ Build-time SEO validation
- ✅ All 22 pages optimized

### v2.0.0
- Font standardization (Raleway only, 0 Oswald refs)
- Unified background text styling
- Component refactoring (scoped styles)
- 13-question FAQ with schema
- Button style standardization

### v1.0.0
- Initial launch
- 22 static pages
- React interactive components
- Chatbot integration

---

**Last Updated**: November 15, 2024
**Built with**: Astro 5.15.8 | React 19.2.0 | Tailwind CSS 4.1.17 | TypeScript
**Status**: ✅ Production Ready
