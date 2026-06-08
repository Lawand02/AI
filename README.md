# Lawand Yousef - Portfolio

A modern, professional portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🌍 **Multi-language**: English, Kurdish (Latin), Arabic (RTL), German
- 🌓 **Dark/Light Mode**: Full theme toggle with system preference detection
- ⚡ **Fast & SEO-friendly**: Static export, Open Graph, sitemap, structured data
- 🎨 **Modern Design**: Gradient themes, smooth animations, responsive
- 💻 **Interactive Terminal**: CLI-style section to learn about me
- 📊 **GitHub Dashboard**: Contribution graph, language stats, repo stats
- 📝 **Blog**: MDX-ready with sample post
- 📬 **Contact Form**: EmailJS integration with validation

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 15 | Framework (static export) |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| next-intl | Internationalization |
| Shadcn/UI | UI components |
| EmailJS | Contact form |
| Lucide React | Icons |

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Required for contact form:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID` - Your EmailJS service ID
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` - Your EmailJS template ID
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` - Your EmailJS public key

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

The static output will be in the `out/` directory.

## Deployment

### GitHub Pages

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Configure your repository Settings > Pages to use GitHub Actions

### Manual GitHub Pages Deploy

```bash
npm run build
# Push the out/ directory to the gh-pages branch
```

### Vercel

1. Connect your repository to Vercel
2. Set `NEXT_PUBLIC_SITE_URL` environment variable
3. Deploy

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`
4. Add redirect rule: `/* /index.html 200` for SPA support

## Project Structure

```
portfolio/
├── public/
│   └── locales/          # Translation files (en, ku, ar, de)
├── posts/                # MDX blog posts
├── src/
│   ├── app/
│   │   ├── [locale]/     # Localized routes
│   │   │   ├── blog/     # Blog pages
│   │   │   ├── now/      # Now page
│   │   │   └── page.tsx  # Main portfolio page
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/       # Navbar, Footer, ThemeProvider
│   │   ├── sections/     # Hero, About, Skills, Projects, etc.
│   │   ├── ui/           # Shadcn UI components
│   │   └── unique/       # CareerTimeline, TechShowcase, NowPage
│   ├── config/           # Site config, skills, projects, achievements
│   ├── i18n/             # Internationalization setup
│   └── lib/              # Utilities
├── .env.example
└── README.md
```

## Contact Form Setup (EmailJS)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with variables: `from_name`, `from_email`, `subject`, `message`
4. Copy your Service ID, Template ID, and Public Key to `.env.local`

## Customization

- Edit `src/config/site.ts` for personal info
- Edit `src/config/skills.ts` for skills data
- Edit `src/config/projects.ts` for project data
- Edit `src/config/achievements.ts` for experience & achievements
- Edit `public/locales/*.json` for translations

## License

MIT
