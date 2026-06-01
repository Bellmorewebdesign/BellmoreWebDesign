# TO ADD YOUR IMAGES

You mentioned adding four before-and-after photos to the root:
- storefront.jpg
- driveway.jpg
- patio.jpg
- siding.jpg

**These files are not currently detected in the root directory.**

## Quick Setup

1. **If the images are in the root**, run this command from PowerShell in the project root:
   ```powershell
   .\scripts\move-images.ps1
   ```

2. **If you haven't added them yet**, place them in the root first, then run the script above.

3. **Or manually place them here:**
   ```
   public/images/samples/pressure-washing/storefront.jpg
   public/images/samples/pressure-washing/driveway.jpg
   public/images/samples/pressure-washing/patio.jpg
   public/images/samples/pressure-washing/siding.jpg
   ```

## What's Ready

All code is updated and ready to use your photos once they're in place:

✓ `BeforeAfterCard.tsx` component created
✓ `PressureWashingSample.tsx` updated with new section
✓ Homepage preview updated to use `driveway.jpg`
✓ Hero updated to use `siding.jpg`
✓ Build passes (tested)
✓ Mobile responsive
✓ Premium animations
✓ Reduced-motion support

See `SETUP-SOUTH-SHORE-SHINE.md` for complete details.
