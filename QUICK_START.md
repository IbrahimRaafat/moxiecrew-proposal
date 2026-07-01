# Quick Start Guide

**Project:** Moxie Crew Proposal Website
**Status:** ✅ Production-ready
**Repository:** https://github.com/IbrahimRaafat/moxiecrew-proposal

## Installation & Running

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Project Structure

```
moxiecrew-proposal/
├── pages/
│   ├── index.tsx          # Main page
│   ├── _app.tsx           # App wrapper + Lenis
│   └── _document.tsx      # HTML document
├── components/
│   ├── sections/          # Page sections
│   ├── layout/            # Navbar + Footer
│   └── ui/                # UI components
├── styles/
│   ├── globals.css        # Global styles
│   └── tailwind.config.ts # Tailwind config
├── public/
│   ├── logos/             # Logo assets
│   └── icons/             # Custom SVGs
└── SESSION_PROGRESS.md    # Session documentation
```

## Key Features

- 🎨 Professional loading screen with progress bar
- 🚀 Smooth scrolling (Lenis library)
- 📱 Fully responsive design (mobile-first)
- ✨ Smooth animations (Framer Motion)
- 🎯 3 navigable sections + hidden CTA
- 🔗 Logo navigation to hero section

## Navigation Structure

**Navbar & Footer Links:**
1. Executive Summary (Section 01)
2. Loyalty Program (Section 02)
3. Quotation (Section 03)

**Logo:** Navigates to Hero section

## Sections

1. **Hero** - Landing page (not in nav)
2. **Executive Summary** - Overview + 6 services
3. **Loyalty Program** - Features + bento grid
4. **Quotation** - 3 pricing cards
5. **CTA** - Call-to-action (not in nav)

## Color Scheme

- **Primary:** #1a1a1a (Black)
- **Secondary:** #ffffff (White)
- **Accent:** #e53935 (Red)
- **Muted:** #666666 (Gray)

## Tech Stack

- **Framework:** Next.js 16.2.9
- **UI:** React 19.2.4
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Smooth Scroll:** Lenis
- **Icons:** Lucide React + custom SVG
- **Language:** TypeScript

## Development Workflow

```bash
# 1. Start dev server
npm run dev

# 2. Make changes
# 3. Test in browser at http://localhost:3000

# 4. Build before pushing
npm run build

# 5. Commit changes
git add .
git commit -m "Your message"

# 6. Push to main
git push origin master:main
```

## Troubleshooting

**Build fails with "Duplicate identifier 'PagesPageConfig'":**
```bash
rm -rf .next .turbo
npm run build
```

**Changes not showing in browser:**
```bash
# Clear cache and rebuild
rm -rf .next
npm run dev
```

**Lenis smooth scroll not working:**
- Check browser console for errors
- Ensure `/pages/_app.tsx` has Lenis setup
- Test on different browser

## Performance Targets

- Lighthouse Score: > 95
- Page Load Time: < 2.5s
- First Paint: < 1s
- Responsive: All screen sizes
- Accessibility: WCAG 2.1 AA

## Important Files

| File | Purpose |
|------|---------|
| `pages/index.tsx` | Main page structure |
| `pages/_app.tsx` | Lenis initialization |
| `styles/globals.css` | Global styles + overflow fix |
| `components/layout/Navbar.tsx` | Navigation |
| `components/layout/Footer.tsx` | Footer |

## Common Tasks

**Add new section:**
1. Create component in `/components/sections/`
2. Import in `/pages/index.tsx`
3. Update navbar in `/components/layout/Navbar.tsx`
4. Update footer in `/components/layout/Footer.tsx`

**Change colors:**
Edit `/tailwind.config.ts` or `/styles/globals.css`

**Update logo:**
Replace SVG files in `/public/logos/`

**Fix responsive issue:**
1. Check `/styles/globals.css` for overflow issues
2. Review Tailwind breakpoints
3. Test on mobile device

## Documentation Files

- `SESSION_PROGRESS.md` - Detailed session work
- `FUTURE_PLANS.md` - Roadmap & next steps
- `SESSION_INFO.md` - Technical details & stats
- `QUICK_START.md` - This file

## Support Resources

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion/
- Lenis: https://lenis.darkroom.engineering/

---

**Last Updated:** 2026-07-01
**Status:** Production-ready for testing phase
