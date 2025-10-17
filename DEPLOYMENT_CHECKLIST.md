# Deployment Checklist - CRID International Website

Use this checklist before deploying to production.

## 🔍 Pre-Deployment Checklist

### Content Review

- [ ] All text content reviewed for accuracy
- [ ] Contact information verified (phone, email, address)
- [ ] Team member photos and bios up to date
- [ ] PDF document converted and accessible
- [ ] All images optimized for web (< 300KB each)
- [ ] Logo displays correctly on all pages

### Functionality Testing

- [ ] All navigation links work
- [ ] Mobile menu opens/closes correctly
- [ ] Team member modals open/close properly
- [ ] Contact form mailto works or is replaced with form service
- [ ] Resource downloads work
- [ ] All pages load without errors
- [ ] Gallery images display correctly
- [ ] Stats animation works

### Responsive Design

- [ ] Test on mobile (375px, 414px)
- [ ] Test on tablet (768px, 1024px)
- [ ] Test on desktop (1280px, 1920px)
- [ ] Navigation works on all screen sizes
- [ ] Images scale properly
- [ ] Text is readable on all devices

### Browser Testing

- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Accessibility

- [ ] Keyboard navigation works throughout site
- [ ] Focus indicators visible
- [ ] Screen reader testing (NVDA/VoiceOver)
- [ ] Alt text on all images
- [ ] Color contrast meets WCAG AA
- [ ] Forms have proper labels

### SEO

- [ ] Page titles unique and descriptive
- [ ] Meta descriptions present (150-160 chars)
- [ ] OpenGraph tags configured
- [ ] Favicon present and displays
- [ ] robots.txt configured (if needed)
- [ ] sitemap.xml generated (optional)

### Performance

- [ ] Run Lighthouse audit (target ≥95 on all metrics)
- [ ] Images lazy load
- [ ] No console errors
- [ ] Page load time < 3 seconds
- [ ] First Contentful Paint < 1.5 seconds

### Configuration

- [ ] Update base URL in metadata (if deploying to custom domain)
- [ ] Update social media links (when available)
- [ ] Configure form service (Formspree/Netlify Forms)
- [ ] Add Google Analytics (optional)
- [ ] Configure error tracking (Sentry, optional)

### Security

- [ ] No API keys in client code
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] No sensitive information exposed

## 🚀 Deployment Steps

### Option 1: Vercel (Recommended)

1. **Prepare Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: CRID International website"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your Git repository
   - Configure:
     - Framework: Next.js
     - Build Command: `npm run build`
     - Output Directory: `.next`
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add `www.cridinternational.org`
   - Follow DNS configuration instructions

### Option 2: Netlify

1. **Prepare Repository** (same as above)

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import existing project"
   - Connect your Git repository
   - Configure:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

3. **Custom Domain** (follow Netlify's domain setup)

### Option 3: Traditional Hosting

1. **Build Locally**
   ```bash
   npm run build
   ```

2. **Upload Files**
   - Upload entire project directory to server
   - Ensure Node.js 18+ is installed on server

3. **Start Application**
   ```bash
   npm install --production
   npm start
   ```

4. **Configure Process Manager** (PM2 recommended)
   ```bash
   npm install -g pm2
   pm2 start npm --name "crid-website" -- start
   pm2 save
   ```

## 📋 Post-Deployment Checklist

### Immediate

- [ ] Test deployed site URL
- [ ] Verify all pages load
- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Verify HTTPS is working

### First Week

- [ ] Monitor analytics (if configured)
- [ ] Check for any error reports
- [ ] Gather user feedback
- [ ] Test page load speeds from different locations

### Ongoing

- [ ] Regular content updates via JSON files
- [ ] Add new team members as needed
- [ ] Upload new resources/publications
- [ ] Update focus areas and programs
- [ ] Monitor and optimize performance

## 🔄 Content Update Workflow

To update content after deployment:

1. **Edit JSON Files** in `/content/crid/`
2. **Commit Changes**
   ```bash
   git add content/
   git commit -m "Update content: [description]"
   git push
   ```
3. **Auto-Deploy** (Vercel/Netlify will auto-redeploy)

For static hosting:
1. Edit JSON files locally
2. Run `npm run build`
3. Upload updated files

## 🐛 Troubleshooting

### Build Fails

- Check Node.js version (18+)
- Run `npm install` to ensure all deps installed
- Check for TypeScript errors: `npm run build`
- Review build logs for specific errors

### Images Not Loading

- Verify images exist in `/public/crid/`
- Check file names match JSON references
- Ensure images are < 5MB each

### Slow Performance

- Optimize images (use TinyPNG, Squoosh)
- Enable CDN (automatic on Vercel/Netlify)
- Check Lighthouse report for specific issues

### Contact Form Not Working

- Verify email client opens with mailto links
- Or integrate form service (Formspree, Netlify Forms)
- Update form handler in `/src/app/contact/page.tsx`

## 📞 Support

For deployment issues:
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **General**: Review README.md and documentation

---

**Ready to Deploy?** ✅ Complete this checklist, then deploy with confidence!

