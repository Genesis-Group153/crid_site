# Quick Start Guide - CRID International Website

## ✅ Setup Complete!

All your assets have been successfully prepared and copied to the correct locations:

- ✓ Logo
- ✓ Community photos (3)
- ✓ Team profile photos (2)

## ⚠️ One Manual Step Required

**Convert Company Profile to PDF:**

1. Open `CRID INTERNATIONAL ltd Profile.dot` in Microsoft Word
2. Click **File → Save As**
3. Choose **PDF** format
4. Save as: `public\crid\CRID-International-Profile.pdf`

## 🚀 Run the Website

### Step 1: Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons

### Step 2: Start Development Server

```bash
npm run dev
```

The website will be available at: **http://localhost:3000**

### Step 3: Build for Production

When ready to deploy:

```bash
npm run build
npm start
```

## 📄 Available Pages

Your website includes these pages:

1. **Home** (`/`) - Hero, stats, focus areas, programs, gallery, CTA
2. **About** (`/about`) - Vision, mission, values, approach
3. **Focus Areas** (`/focus-areas`) - All 7 focus areas with details
4. **Services** (`/services`) - 8 services with expandable details
5. **Programs** (`/programs`) - 5 flagship programs with impact
6. **Team** (`/team`) - Team members with modal bios
7. **Resources** (`/resources`) - Downloadable documents
8. **Contact** (`/contact`) - Contact form and office locations

## 🎨 Customization

### Update Content

All content is in JSON files under `/content/crid/`:
- `profile.json` - Main org info, focus areas, services
- `team.json` - Team member profiles
- `gallery.json` - Community photos
- `resources.json` - Downloadable documents

### Update Colors

Edit `tailwind.config.ts` to change brand colors:
- Primary: `#0B1F3B` (deep navy)
- Secondary: `#1E3A8A` (cobalt)
- Accent: `#F59E0B` (gold)

### Add New Team Member

Edit `content/crid/team.json`:

```json
{
  "name": "New Person",
  "title": "Their Position",
  "photo": "/crid/their-photo.jpg",
  "bio": "Their biography...",
  "links": [
    {"type": "email", "href": "mailto:email@example.com"}
  ]
}
```

Don't forget to add their photo to `/public/crid/`!

## 🌐 Deployment Options

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy (automatic)

### Netlify

1. Push code to GitHub/GitLab
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

### Other Hosts

1. Run `npm run build`
2. Upload `.next` folder and `package.json`
3. Run `npm start` on server

## 📞 Support

Questions? Contact: **info@cridinternational.org**

## 🎯 Next Steps

1. ✓ Assets prepared
2. ⏳ Convert PDF (manual step above)
3. ⏳ Install dependencies: `npm install`
4. ⏳ Run development: `npm run dev`
5. ⏳ Review website at http://localhost:3000
6. ⏳ Customize content in `/content/crid/`
7. ⏳ Deploy to production

**Ready to go! 🚀**

