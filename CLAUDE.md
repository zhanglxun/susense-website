# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a corporate website for 深圳市速睿森视科技有限公司 (Susense Technologies), a technology consulting and development company founded in 2019. The website showcases their services in digital transformation, software development, and AI applications.

## Development Environment

### Technology Stack
- **Frontend**: Static HTML/CSS/JavaScript with Bootstrap 4.3.1
- **JavaScript Libraries**: jQuery, AOS, Flickity, Jarallax, Typed.js, CountUp.js, Highlight.js, FancyBox
- **Icons**: Feather Icons
- **Language**: Chinese (zh-CN)

### Development Commands
Since this is a static website with no build process:

```bash
# Serve locally (recommended to avoid CORS issues)
python -m http.server 8000
# or
npx serve .

# Direct file opening (may have path issues)
open index.html
```

## Architecture & Structure

### Template System
- **Common Components**: All pages use shared header and footer templates
- **Injection Method**: `assets/js/layout.js` injects header/footer into pages with `id="header"` and `id="footer"` placeholders
- **Template Files**:
  - `header.html` - Navigation structure
  - `footer.html` - Footer with company info and links

### Key Pages Structure
```
├── index.html          # Company homepage
├── about.html          # About the company
├── news.html           # News and case studies
├── contact.html        # Contact information
├── tech-doc.html       # Technical documentation
├── case-*.html         # Platform showcase pages (business, data, ai, devops, tech)
├── solution*.html      # Industry solutions (retail, jewelry, manufacturing)
└── template pages      # Landkit templates (cloud, coworking, job, rental)
```

### Asset Organization
- **CSS**: `assets/css/theme.min.css` (main stylesheet)
- **JavaScript**: `assets/js/theme.min.js` + `assets/js/layout.js`
- **Libraries**: `assets/libs/` (third-party dependencies)
- **Images**: `assets/img/` (organized by type: icons, illustrations, covers, etc.)

## Known Issues & Maintenance

### Critical Issues (Must Fix)
1. **Broken References**: Some pages reference non-existent files (`overview.html`, `theme.min2.css`)
2. **Remote Dependencies**: Many resources loaded from `http://image.susense.cn/` - should be localized
3. **Missing Pages**: Navigation links to blog pages that don't exist
4. **SEO Gaps**: Most pages lack meta descriptions

### Development Rules
Follow Cursor IDE rules in `.cursor/rules/website.mdc`:
- Maintain existing modular page structure
- Always modify header/footer from source templates, not individual pages
- Keep technology stack minimal (HTML/CSS/JS only)
- Preserve corporate design style

### Template Duplication Problem
- `layout.js` contains inline templates that duplicate `header.html` and `footer.html`
- This creates maintenance burden - should be unified

### Content Management
- All content is static HTML
- Chinese language throughout
- Regular updates needed for news/case studies

## Working with This Codebase

### When Adding New Pages
1. Create HTML file with header/footer placeholders:
   ```html
   <nav id="header"></nav>
   <footer id="footer"></footer>
   ```
2. Include necessary CSS/JS files
3. Add navigation link to `layout.js` header template
4. Test with local server

### When Modifying Navigation
1. Edit both `header.html` AND the inline template in `layout.js`
2. Test all pages to ensure consistency
3. Check mobile responsiveness

### When Styling
1. Use existing Bootstrap classes where possible
2. Custom styles go in `assets/css/theme.min.css`
3. Maintain responsive design patterns
4. Test cross-browser compatibility

### Performance Considerations
- Many large images need optimization
- Consider lazy loading implementation
- Some JavaScript could be deferred/async
- Resource bundling opportunities exist

## File Naming Conventions
- Use hyphens for page names: `case-business.html`, `solution-retail.html`
- Keep filenames descriptive but concise
- Maintain existing pattern for consistency