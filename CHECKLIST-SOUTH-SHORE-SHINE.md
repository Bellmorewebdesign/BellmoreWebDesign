# ✅ FINAL CHECKLIST - South Shore Shine Update

Use this checklist after adding your four before-and-after images.

## Step 1: Add Images

- [ ] Place these four files in the correct location:
  ```
  public/images/samples/pressure-washing/storefront.jpg
  public/images/samples/pressure-washing/driveway.jpg
  public/images/samples/pressure-washing/patio.jpg
  public/images/samples/pressure-washing/siding.jpg
  ```

**Quick method:** If images are in root, run:
```powershell
.\scripts\move-images.ps1
```

## Step 2: Test Locally

```powershell
npm run dev
```

### Check South Shore Shine Page
Visit: http://localhost:3000/sample-sites/exterior-cleaning

- [ ] Hero section shows **siding.jpg** as background
- [ ] Hero text is readable over the image
- [ ] Before & After section title: "Realistic Before and After Results"
- [ ] All four before/after cards appear:
  - [ ] Storefront Cleaning (with "Commercial" tag)
  - [ ] Driveway Cleaning (with "Residential" tag)
  - [ ] Patio and Paver Cleaning (with "Outdoor Spaces" tag)
  - [ ] House Siding Wash (with "House Washing" tag)
- [ ] No broken image icons (🖼️ ❌)
- [ ] Images are not stretched or distorted
- [ ] "Before / After" label appears on each card
- [ ] Service type badge appears on each card
- [ ] Cards have soft shadows and rounded corners
- [ ] Background has subtle blue/aqua gradient

### Check Hover Effects
- [ ] Hover over a before/after card:
  - [ ] Image scales slightly (zooms in a bit)
  - [ ] Card lifts up smoothly
  - [ ] Shadow gets stronger
  - [ ] Animation is smooth (not jarring)

### Check Mobile View
Resize browser to phone width or use dev tools mobile view:
- [ ] Cards stack in single column
- [ ] Images remain large and clear
- [ ] No horizontal scrolling
- [ ] Text is readable
- [ ] Buttons are easy to tap
- [ ] Layout looks clean and professional

### Check Homepage
Visit: http://localhost:3000

#### Interactive Samples Section
- [ ] Select "Exterior Cleaning" tab
- [ ] Desktop mockup shows **driveway.jpg** in hero
- [ ] Mobile mockup shows **driveway.jpg** in hero
- [ ] Image is visible and looks good

#### Sample Sites Section
Scroll down to "Sample sites" section:
- [ ] South Shore Shine card exists
- [ ] Preview mockup shows **driveway.jpg**
- [ ] "View Full Sample" button works

## Step 3: Build Test

```powershell
npm run build
```

- [ ] Build completes successfully
- [ ] No TypeScript errors
- [ ] No image optimization errors
- [ ] All pages generate correctly

## Step 4: Verify Existing Features

Make sure nothing broke:
- [ ] Main Bellmore Web Design site still works
- [ ] Contact form still works (test at `/#contact`)
- [ ] Other sample sites still work:
  - [ ] Restaurant sample
  - [ ] Pet Care sample
  - [ ] Events sample
  - [ ] High-End Tech sample
- [ ] Navigation works
- [ ] All buttons and links work

## Step 5: Deploy (Optional)

If everything looks good:

```powershell
npm run deploy:branch
```

- [ ] Deployment completes
- [ ] Live site updates
- [ ] South Shore Shine page looks correct on live site
- [ ] Homepage shows updated preview

## Troubleshooting

### Images show as broken (🖼️ ❌)
**Problem:** Image paths are incorrect or files are missing

**Solutions:**
1. Check file names are exactly: `storefront.jpg`, `driveway.jpg`, `patio.jpg`, `siding.jpg` (lowercase)
2. Verify files are in: `public/images/samples/pressure-washing/`
3. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
4. Restart dev server

### Images look stretched or weird
**Problem:** Aspect ratio doesn't match

**Solutions:**
1. Check that images are approximately 16:10 or 16:9 aspect ratio
2. Images should be horizontal (landscape orientation)
3. The vertical comparison line should be roughly in the center
4. Try different images if needed

### Build fails
**Problem:** TypeScript or Next.js error

**Solutions:**
1. Read the error message carefully
2. Check that all files are saved
3. Run `npm install` to ensure dependencies are up to date
4. Delete `.next` folder and rebuild

### Hero image doesn't show
**Problem:** `siding.jpg` is missing or path is wrong

**Solutions:**
1. Verify `siding.jpg` exists in `public/images/samples/pressure-washing/`
2. Check browser console for 404 errors
3. Clear cache and reload

### Homepage preview doesn't show new image
**Problem:** `driveway.jpg` is missing or browser cache

**Solutions:**
1. Verify `driveway.jpg` exists in `public/images/samples/pressure-washing/`
2. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
3. Check browser console for errors

### Animations don't work
**Problem:** JavaScript or Motion library issue

**Solutions:**
1. Check browser console for errors
2. Ensure Motion library is installed: `npm install motion`
3. Try in a different browser

### Cards don't hover correctly
**Problem:** CSS issue or prefers-reduced-motion is on

**Solutions:**
1. Check if system has "Reduce motion" enabled (disable in OS settings)
2. Try in incognito/private window
3. Check browser console for CSS errors

## After Everything Works

- [ ] Take screenshots for your portfolio
- [ ] Test on real phone/tablet
- [ ] Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Share with client or team for feedback
- [ ] Consider adding more sample before/after photos in the future

## Reference Documents

- **Complete guide:** `SETUP-SOUTH-SHORE-SHINE.md`
- **Quick start:** `ADD-IMAGES-HERE.md`
- **Full summary:** `SUMMARY-SOUTH-SHORE-SHINE.md`
- **Image requirements:** `public/images/samples/pressure-washing/README.md`

## Support

If you encounter issues not covered here:
1. Check the browser console for errors (F12)
2. Review the reference documents above
3. Verify all files are in the correct locations
4. Ensure file names match exactly (case-sensitive)

---

**🎉 Once all checkboxes are ticked, your South Shore Shine demo is ready to impress!**
