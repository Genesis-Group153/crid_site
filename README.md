# CRID International - Marketing Website

A production-grade, accessible marketing website for **CRID International Limited** built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Playfair Display (headings) & Inter (body)

## 📦 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. **Add required assets** to `/public/crid/`:
   - `logo.png` or `logo.svg` - Company logo
   - `community-1.jpg`, `community-2.jpg`, `community-3.jpg` - Gallery images
   - `profile-1.jpg`, `profile-2.jpg` - Team member photos
   - `CRID-International-Profile.pdf` - Company profile document

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── content/crid/          # Content JSON files
│   ├── profile.json       # Organization profile, vision, mission, etc.
│   ├── team.json          # Team member data
│   ├── gallery.json       # Image gallery references
│   └── resources.json     # Downloadable resources
├── public/crid/           # Static assets (images, PDFs, logo)
├── src/
│   ├── app/               # Next.js pages (App Router)
│   │   ├── about/
│   │   ├── contact/
│   │   ├── focus-areas/
│   │   ├── programs/
│   │   ├── resources/
│   │   ├── services/
│   │   ├── team/
│   │   └── page.tsx       # Home page
│   ├── components/        # Reusable React components
│   └── lib/               # Utilities and content loaders
└── tailwind.config.ts     # Tailwind configuration with brand theme
```

## 🎨 Customization

### Brand Colors

The brand colors are defined in `tailwind.config.ts`:

- **Primary**: `#0B1F3B` (deep navy)
- **Secondary**: `#1E3A8A` (cobalt)
- **Accent**: `#F59E0B` (gold)

To change these colors, update the `theme.extend.colors` section in the Tailwind config.

### Adding Content

All content is managed through JSON files in `/content/crid/`. This makes it easy to update without touching code.

#### Add a New Focus Area

Edit `content/crid/profile.json` and add to the `focusAreas` array:

```json
{
  "title": "New Focus Area Title",
  "points": [
    "Key point 1",
    "Key point 2",
    "Key point 3"
  ]
}
```

#### Add a New Team Member

Edit `content/crid/team.json` and add a new object:

```json
{
  "name": "Jane Doe",
  "title": "Position Title",
  "photo": "/crid/jane-photo.jpg",
  "bio": "Biography text...",
  "links": [
    { "type": "email", "href": "mailto:jane@cridinternational.org" },
    { "type": "tel", "href": "tel:+256123456789" }
  ]
}
```

#### Add a New Resource

Edit `content/crid/resources.json`:

```json
{
  "title": "Resource Name",
  "file": "/crid/document.pdf",
  "description": "Brief description of the resource"
}
```

#### Add Gallery Images

Edit `content/crid/gallery.json`:

```json
{
  "src": "/crid/new-image.jpg",
  "alt": "Description of the image"
}
```

Make sure to place the actual image file in `/public/crid/`.

## ♿ Accessibility

This website follows WCAG 2.1 AA standards:

- Semantic HTML elements
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states
- Color contrast ratios ≥ 4.5:1
- Reduced motion respect
- Skip to content link

## 🔍 SEO

- Next.js Metadata API for all pages
- OpenGraph and Twitter Card support
- JSON-LD structured data (Organization, LocalBusiness)
- Semantic HTML
- Optimized images with next/image
- Responsive design

## 📧 Contact Form

The contact form currently uses a `mailto:` fallback. To integrate with a form service:

1. Sign up for [Formspree](https://formspree.io/) or similar service
2. Update the `handleSubmit` function in `src/app/contact/page.tsx`
3. Replace the mailto logic with your form endpoint

Example with Formspree:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' },
  });
  // Handle response
};
```

## 🚀 Deployment

This is a static Next.js site that can be deployed to:

- **Vercel** (recommended): `vercel --prod`
- **Netlify**: Connect your Git repository
- **AWS S3 + CloudFront**: `npm run build` and upload the `out` folder
- **Any static hosting service**

### Environment Variables

No environment variables are required for basic functionality. If you add external services (analytics, forms), add them to `.env.local`:

```
NEXT_PUBLIC_FORMSPREE_ID=your_id_here
NEXT_PUBLIC_GA_ID=your_ga_id_here
```

## 📝 License

© 2024 CRID International Limited. All rights reserved.

## 🤝 Support

For technical support or questions, contact: info@cridinternational.org

