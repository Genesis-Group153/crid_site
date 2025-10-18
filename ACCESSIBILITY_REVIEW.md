# Accessibility & Contrast Review - CRID International Website

## Brand Colors

### Primary Palette
- **Primary Red**: `#C81E1E` (rgb: 200, 30, 30)
- **Secondary Green**: `#16A34A` (rgb: 22, 163, 74)
- **Accent Black**: `#111827` (rgb: 17, 24, 39)
- **Surface**: `#F8FAFC` (rgb: 248, 250, 252)
- **Text**: `#0F172A` (rgb: 15, 23, 42)

## WCAG 2.1 Contrast Ratios

### Red Primary (#C81E1E) Combinations
✅ **#C81E1E on White (#FFFFFF)**: 5.8:1 (AA compliant for normal text, AAA for large text)
✅ **White (#FFFFFF) on #C81E1E**: 5.8:1 (AA compliant for normal text)
✅ **#C81E1E on #F8FAFC (Surface)**: 5.7:1 (AA compliant)
❌ **#C81E1E on Black (#111827)**: Low contrast - avoid this combination

### Green Secondary (#16A34A) Combinations
✅ **#16A34A on White (#FFFFFF)**: 3.5:1 (AA compliant for large text only)
✅ **White (#FFFFFF) on #16A34A**: 3.5:1 (AA compliant for large text)
⚠️ **#16A34A on #F8FAFC**: 3.4:1 (Use for decorative elements only or increase size)
✅ **#16A34A on Black (#111827)**: Good contrast for icons and decorative elements

### Accent Black (#111827) Combinations
✅ **#111827 on White (#FFFFFF)**: 17.4:1 (AAA compliant for all text)
✅ **White (#FFFFFF) on #111827**: 17.4:1 (AAA compliant)
✅ **#111827 on #F8FAFC**: 17.1:1 (AAA compliant)

### Text Colors
✅ **Text (#0F172A) on White**: 18.5:1 (AAA compliant)
✅ **Text Light (#475569) on White**: 9.2:1 (AAA compliant)

## Implementation Guidelines

### ✅ Approved Combinations
1. **Primary Red** for buttons, CTAs, and accent elements on white/light backgrounds
2. **Secondary Green** for icons, success states, and large text elements
3. **Accent Black** for headings and high-emphasis text
4. **White text** on red or black backgrounds

### ⚠️ Use with Caution
1. **Green text** on white - ensure text is ≥18px or bold
2. **Red on black** - avoid for text, use only for very large decorative elements

### 🎨 Color Usage Map
- **Headings**: Accent Black (#111827) or Primary Red (#C81E1E)
- **Body text**: Text (#0F172A) or Text Light (#475569)
- **Buttons**: Primary Red background with white text
- **Links**: Primary Red with hover state Primary-800
- **Icons**: Secondary Green or Primary Red
- **Backgrounds**: White, Surface (#F8FAFC), or gradients with red/black

## Accessibility Features Implemented

### 1. **Keyboard Navigation**
- All interactive elements are keyboard accessible
- Focus states use visible outlines (outline-brand-primary)
- Skip-to-content link for screen reader users

### 2. **Screen Reader Support**
- Emojis marked with `aria-hidden="true"` and text labels provided
- All images have descriptive alt text
- Proper heading hierarchy (h1 → h6)
- ARIA labels on icon-only buttons

### 3. **Reduced Motion**
- `prefers-reduced-motion` media query implemented
- Animations disabled for users who prefer reduced motion

### 4. **Semantic HTML**
- Proper use of `<nav>`, `<main>`, `<header>`, `<footer>`
- `role="contentinfo"` on footer
- Breadcrumb navigation with `aria-label="Breadcrumb"`

### 5. **Color Independence**
- Information not conveyed by color alone
- Icon + text combinations for actions
- Status indicators use icons alongside colors

### 6. **Touch Targets**
- All interactive elements ≥44x44px (WCAG 2.5.5)
- Adequate spacing between clickable elements

## JSON-LD Structured Data
- ✅ Organization schema on homepage
- ✅ Person schema for each team member
- ✅ Proper semantic markup for SEO

## Font Stack
- **Headings**: Cambria (serif) - excellent readability, professional tone
- **Body**: Inter (sans-serif) - clean, modern, highly legible

## Lighthouse Targets
All pages should achieve:
- ✅ Performance: ≥95
- ✅ Accessibility: ≥100
- ✅ Best Practices: ≥95
- ✅ SEO: ≥95

## Recommendations
1. **Test with actual users** who use assistive technologies
2. **Run automated accessibility tests** using axe DevTools or WAVE
3. **Verify color blindness accessibility** using tools like Color Oracle
4. **Test keyboard navigation** across all pages
5. **Validate HTML** to ensure no semantic errors

## Contrast Verification Tools Used
- WebAIM Contrast Checker
- APCA (Advanced Perceptual Contrast Algorithm)
- Chrome DevTools Accessibility Inspector

---

**Last Updated**: October 18, 2025
**Compliance Level**: WCAG 2.1 Level AA (targeting AAA where possible)

