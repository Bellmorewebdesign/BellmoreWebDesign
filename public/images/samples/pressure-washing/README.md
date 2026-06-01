# IMPORTANT: Required Images for South Shore Shine Sample

This folder requires four before-and-after comparison images:

1. **storefront.jpg** - Storefront exterior cleaning before and after
2. **driveway.jpg** - Driveway cleaning before and after
3. **patio.jpg** - Patio and paver cleaning before and after
4. **siding.jpg** - House siding wash before and after

## Current Status

**These images are currently missing.** Please add them to this directory.

## Instructions

If these images are in the root directory of the project, please move or copy them here:

```powershell
# PowerShell commands to move images from root to here
Move-Item -Path "storefront.jpg" -Destination "public/images/samples/pressure-washing/storefront.jpg"
Move-Item -Path "driveway.jpg" -Destination "public/images/samples/pressure-washing/driveway.jpg"
Move-Item -Path "patio.jpg" -Destination "public/images/samples/pressure-washing/patio.jpg"
Move-Item -Path "siding.jpg" -Destination "public/images/samples/pressure-washing/siding.jpg"
```

Or use copy to keep originals:

```powershell
Copy-Item -Path "*.jpg" -Destination "public/images/samples/pressure-washing/" -Include "storefront.jpg","driveway.jpg","patio.jpg","siding.jpg"
```

## Image Requirements

- Format: JPG
- Aspect ratio: Approximately 16:10 or 16:9
- Each image should already have a vertical comparison line showing before (left) and after (right)
- Resolution: High enough for web display (at least 1200px wide recommended)

## After Adding Images

Once the images are in place, the South Shore Shine sample site will automatically display them in the "Realistic Before and After Results" section with proper styling, animations, and mobile responsiveness.
