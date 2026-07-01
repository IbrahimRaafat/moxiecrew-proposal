# Moxie Crew Proposal - Future Plans

**Last Updated:** 2026-07-01

## High Priority

### 1. Digital Fabrication SVG Fix
- **Status:** 🔴 Needs Attention
- **Issue:** Current 3D printer SVG icon looks poor quality
- **Path:** `public/icons/digital-fabrication.svg`
- **Action:** Replace with higher quality SVG or redesign
- **Impact:** Visual polish on service cards

### 2. Browser Testing
- Test across Chrome, Firefox, Safari, Edge
- Verify Lenis smooth scroll works on all browsers
- Mobile testing on iOS and Android devices
- Test loading animation timing

## Medium Priority

### 3. Performance Optimization
- Lighthouse audit and optimization
- Image optimization for loyalty assets
- Bundle size analysis
- Core Web Vitals improvements

### 4. Analytics Integration
- Add Google Analytics 4
- Track section scrolling behavior
- Monitor user engagement metrics
- CTA click tracking

### 5. Form/Contact Integration
- Add contact form for quotations
- Email notification system
- Form validation and error handling
- Success message flow

## Low Priority (Nice to Have)

### 6. Enhanced Interactivity
- Video embeds for services
- Interactive pricing calculator
- Animated counters for statistics
- Case study carousel/slider

### 7. Content Additions
- Testimonials section
- Client case studies
- Process/timeline visualization
- FAQ section

### 8. Advanced Features
- Dark mode toggle
- Multi-language support (Arabic/English)
- PDF export/download capability
- Print-optimized view

## Maintenance Tasks

### Regular Updates
- Update service cards with latest offerings
- Refresh case studies quarterly
- Monitor and fix broken links
- Update testimonials/reviews

### Code Quality
- Add unit tests for components
- E2E testing with Playwright
- Accessibility audit (WCAG 2.1)
- Code coverage reporting

## Deployment Roadmap

1. **Current:** Production ready on main branch
2. **Next:** Browser compatibility testing
3. **Then:** Performance optimization
4. **Finally:** Enhanced features & analytics

## Known Issues

- Digital Fabrication SVG quality (see #1 above)
- Cache clearing needed occasionally for Next.js builds
- No analytics tracking currently (planned)

## Success Metrics

- Page load time < 2.5s
- Lighthouse score > 95
- Mobile responsivity 100%
- All sections accessible
- Smooth scroll working on all devices
