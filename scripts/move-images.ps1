# Move Images Script

# This PowerShell script moves the four before-and-after images from the root
# to the correct location in public/images/samples/pressure-washing/

# Check if images exist in root
$images = @("storefront.jpg", "driveway.jpg", "patio.jpg", "siding.jpg")
$destination = "public\images\samples\pressure-washing\"
$found = @()
$missing = @()

foreach ($img in $images) {
    if (Test-Path $img) {
        $found += $img
    } else {
        $missing += $img
    }
}

# Report status
if ($found.Count -eq 0) {
    Write-Host "No images found in root directory." -ForegroundColor Yellow
    Write-Host "Looking for: $($images -join ', ')" -ForegroundColor Yellow
    exit
}

Write-Host "Found $($found.Count) image(s) in root:" -ForegroundColor Green
$found | ForEach-Object { Write-Host "  - $_" -ForegroundColor Green }

if ($missing.Count -gt 0) {
    Write-Host "Missing $($missing.Count) image(s):" -ForegroundColor Yellow
    $missing | ForEach-Object { Write-Host "  - $_" -ForegroundColor Yellow }
}

# Confirm before moving
$response = Read-Host "`nMove found images to $destination? (y/n)"
if ($response -ne 'y') {
    Write-Host "Cancelled." -ForegroundColor Red
    exit
}

# Ensure destination exists
if (-not (Test-Path $destination)) {
    New-Item -ItemType Directory -Path $destination -Force | Out-Null
    Write-Host "Created directory: $destination" -ForegroundColor Cyan
}

# Move images
foreach ($img in $found) {
    $destPath = Join-Path $destination $img
    Move-Item -Path $img -Destination $destPath -Force
    Write-Host "Moved: $img -> $destPath" -ForegroundColor Green
}

Write-Host "`nDone! Images are ready to use." -ForegroundColor Green
