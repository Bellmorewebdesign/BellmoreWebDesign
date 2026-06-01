# South Shore Shine Image Setup Instructions

## Current Status

The code has been updated to use your real before-and-after photos, but the image files are not yet in the correct location.

## Required Images

You mentioned adding these four files to the ROOT of the repo:
- storefront.jpg
- driveway.jpg  
- patio.jpg
- siding.jpg

**However, these files are not currently found in the root directory.**

## What You Need To Do

### Option 1: If the images are in the root directory

Run this PowerShell script from the root of your project:

```powershell
.\scripts\move-images.ps1
```

This will move the four images to: `public/images/samples/pressure-washing/`

### Option 2: If you haven't added the images yet

1. Place your four before-and-after JPG files in the project root:
   - storefront.jpg
   - driveway.jpg
   - patio.jpg
   - siding.jpg

2. Then run the move script:
   ```powershell
   .\scripts\move-images.ps1
   ```

### Option 3: Manual placement

If you prefer, you can directly place the images in:
```
public/images/samples/pressure-washing/storefront.jpg
public/images/samples/pressure-washing/driveway.jpg
public/images/samples/pressure-washing/patio.jpg
public/images/samples/pressure-washing/siding.jpg
```

## What Has Been Updated

### 1. New Component Created
- `components/sample-sites/BeforeAfterCard.tsx` - A premium card component designed for your real before-and-after photos

### 2. South Shore Shine Page Updated
- `components/samples/PressureWashingSample.tsx`
  - Hero now uses `siding.jpg` as background
  - Before & After section completely redesigned with:
    - New title: "Realistic Before and After Results"
    - Professional subtitle explaining the value of strong visuals
    - Four large premium cards showcasing your real photos
    - Gradient background (blue/aqua)
    - Smooth scroll animations
    - Premium hover effects (scale + lift + shadow)
    - Full mobile responsiveness

### 3. Homepage Preview Updated
- `components/samples/sampleData.ts`
  - South Shore Shine preview now uses `driveway.jpg` instead of generic placeholder

### 4. Documentation Added
- `public/images/samples/image-credits.md` - Credits for your images
- `public/images/samples/pressure-washing/README.md` - Instructions in the image folder
- `scripts/move-images.ps1` - Script to move images from root to correct location

## Card Details

Each of your four images will be displayed in premium cards:

### 1. Storefront Cleaning
- Tag: Commercial
- Image: storefront.jpg
- Copy: "Clean glass, brighter entryways, and a better first impression for walk-in customers."

### 2. Driveway Cleaning
- Tag: Residential
- Image: driveway.jpg
- Copy: "Built-up dirt and stains removed to make the property look newer and better maintained."

### 3. Patio and Paver Cleaning
- Tag: Outdoor Spaces
- Image: patio.jpg
- Copy: "Patios, pavers, and backyard areas cleaned up for a fresher outdoor space."

### 4. House Siding Wash
- Tag: House Washing
- Image: siding.jpg
- Copy: "Siding cleaned carefully to remove grime and improve curb appeal."

## Design Features

✓ Large, photo-focused cards (16:10 aspect ratio)
✓ Two-column grid on desktop
✓ One-column stack on mobile
✓ Rounded corners with soft shadows
✓ Subtle blue/aqua gradient background
✓ "Before / After" overlay label
✓ Service type badge on each card
✓ Smooth scroll-reveal animations
✓ Premium hover effects:
  - Image scales slightly (1.03x)
  - Card lifts up (-6px)
  - Shadow strengthens
✓ Full prefers-reduced-motion support

## Next Steps

1. **Add the images** to the project (if not already there)
2. **Run the move script** to place them in the correct folder
3. **Test locally**: `npm run dev` and visit http://localhost:3000/sample-sites/exterior-cleaning
4. **Build**: `npm run build` to ensure no errors
5. **Deploy**: `npm run deploy:branch` if using the branch deployment

## Verification Checklist

After adding images, verify:
- [ ] All four images appear on the South Shore Shine page
- [ ] No broken image icons
- [ ] Images are not stretched or distorted
- [ ] Cards look premium and professional
- [ ] Hover effects work smoothly
- [ ] Mobile layout stacks cleanly
- [ ] Hero background shows siding.jpg
- [ ] Homepage preview shows driveway.jpg
- [ ] Build completes without errors

## Troubleshooting

**Images show as broken icons:**
- Check the file names match exactly (lowercase)
- Verify files are in `public/images/samples/pressure-washing/`
- Clear browser cache and reload

**Build fails:**
- Run `npm run build` to see specific errors
- Check that image files are valid JPG format
- Ensure file sizes are reasonable (< 5MB each recommended)

**Images look stretched:**
- The aspect-ratio CSS should prevent this
- Check that your images are approximately 16:10 or 16:9 ratio
- Images will be cropped with object-fit: cover to fill the space

## Contact Form Note

The Bellmore Web Design contact form has NOT been modified. The South Shore Shine "Get a Free Estimate" buttons correctly link to the main site's contact form.
