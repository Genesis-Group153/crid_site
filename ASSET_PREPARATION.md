# Asset Preparation Guide

Before running the website, you need to prepare and place the following assets in the `/public/crid/` directory.

## Required Assets

### 1. Logo
- **Source**: `Logo.png` (in project root)
- **Target**: `/public/crid/logo.png`
- **Requirements**: 
  - Transparent background (PNG)
  - Minimum size: 200x200px
  - Recommended: Square ratio

### 2. Community Photos
Rename and move these files:

- **Community 1.jpeg** → `/public/crid/community-1.jpg`
- **Community 2.jpeg** → `/public/crid/community-2.jpg`
- **Community 3.jpeg** → `/public/crid/community-3.jpg`

**Requirements**:
- Format: JPEG or JPG
- Recommended size: 1200x900px or larger
- Aspect ratio: 4:3

### 3. Team Photos
Rename and move these files:

- **Profile.jpeg** → `/public/crid/profile-1.jpg`
- **Profile 2.jpeg** → `/public/crid/profile-2.jpg`

**Requirements**:
- Format: JPEG or JPG
- Recommended size: 600x600px or larger
- Aspect ratio: 1:1 (square)

### 4. Company Profile Document
Convert and move:

- **CRID INTERNATIONAL ltd Profile.dot** or **Profiles.docx** → Convert to PDF
- **Target**: `/public/crid/CRID-International-Profile.pdf`

**Conversion Steps**:
1. Open the .dot or .docx file in Microsoft Word
2. File → Save As → Choose PDF format
3. Save as `CRID-International-Profile.pdf`
4. Move to `/public/crid/` directory

## Quick Setup Script

You can use these commands to prepare your assets (Windows PowerShell):

```powershell
# Create directory if it doesn't exist
New-Item -ItemType Directory -Force -Path "public\crid"

# Copy and rename logo
Copy-Item "Logo.png" "public\crid\logo.png"

# Copy and rename community images
Copy-Item "Community 1.jpeg" "public\crid\community-1.jpg"
Copy-Item "Community 2.jpeg" "public\crid\community-2.jpg"
Copy-Item "Community 3.jpeg" "public\crid\community-3.jpg"

# Copy and rename profile images
Copy-Item "Profile.jpeg" "public\crid\profile-1.jpg"
Copy-Item "Profile 2.jpeg" "public\crid\profile-2.jpg"

# Note: You'll need to manually convert and copy the PDF
```

## Verification Checklist

Before running `npm run dev`, verify:

- [ ] `/public/crid/logo.png` exists
- [ ] `/public/crid/community-1.jpg` exists
- [ ] `/public/crid/community-2.jpg` exists
- [ ] `/public/crid/community-3.jpg` exists
- [ ] `/public/crid/profile-1.jpg` exists
- [ ] `/public/crid/profile-2.jpg` exists
- [ ] `/public/crid/CRID-International-Profile.pdf` exists

## Image Optimization Tips

For better website performance:

1. **Compress images** using tools like:
   - TinyPNG (https://tinypng.com/)
   - ImageOptim (Mac)
   - Squoosh (https://squoosh.app/)

2. **Target file sizes**:
   - Logo: < 50KB
   - Photos: < 300KB each
   - PDF: < 5MB

3. **Format recommendations**:
   - Logo: PNG with transparency
   - Photos: JPEG at 80-85% quality
   - Consider WebP for even better compression

## Alternative Logo Formats

If you have the logo in SVG format, that's even better:
- Place it as `/public/crid/logo.svg`
- Update references in the code from `logo.png` to `logo.svg`
- SVG benefits: smaller file size, perfect scaling

