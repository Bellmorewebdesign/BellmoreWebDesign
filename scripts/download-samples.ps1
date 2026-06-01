# One-time helper to fetch copyright-safe Unsplash images into public/images/samples.
# Unsplash License: free for commercial and personal use, no permission needed.
$ErrorActionPreference = "Stop"
$base = "https://images.unsplash.com/"
$root = Join-Path $PSScriptRoot "..\public\images\samples"

# id | relative output path | width
$items = @(
  # pressure-washing
  @("photo-1707897283727-31befe824066", "pressure-washing\hero-driveway-wash.jpg", 1800),
  @("photo-1640653488366-f7771cd7292d", "pressure-washing\patio-cleaning.jpg", 1200),
  @("photo-1718152521364-b9655b8a7926", "pressure-washing\surface-cleaning.jpg", 1200),
  @("photo-1482449609509-eae2a7ea42b7", "pressure-washing\window-cleaning.jpg", 1200),
  @("photo-1592365559101-19adfefdf294", "pressure-washing\clean-home-exterior.jpg", 1400),
  @("photo-1764470740837-0114ed655d52", "pressure-washing\neighborhood-homes.jpg", 1400),
  # restaurant
  @("photo-1760533536738-f0965fd52354", "restaurant\hero-chicken-sandwich.jpg", 1800),
  @("photo-1768716941584-1d5746e76173", "restaurant\nashville-hot-sandwich.jpg", 1200),
  @("photo-1758578484486-74373f45b0b7", "restaurant\crispy-tenders-fries.jpg", 1200),
  @("photo-1674435545962-3d04f9198786", "restaurant\chicken-sandwich-closeup.jpg", 1200),
  # pet-care
  @("photo-1779109052787-f464cc383f3e", "pet-care\hero-golden-retriever.jpg", 1800),
  @("photo-1760615303236-e5923d66a450", "pet-care\puppy-on-leash.jpg", 1200),
  @("photo-1775806272302-879b04a870cf", "pet-care\dog-running-field.jpg", 1200),
  @("photo-1760615303229-8b32553033a6", "pet-care\dog-walking-park.jpg", 1200),
  @("photo-1720749407529-d812eb277413", "pet-care\dog-resting-home.jpg", 1200),
  @("photo-1779672111613-c636b14f3669", "pet-care\puppy-napping.jpg", 1200),
  # events
  @("photo-1768776182359-75ecacc8735d", "events\hero-balloon-setup.jpg", 1800),
  @("photo-1635388114403-e1c51f9493db", "events\balloon-arch.jpg", 1200),
  @("photo-1768776185742-0cc9a057b195", "events\party-celebration.jpg", 1200),
  @("photo-1756621716318-9eec89d42715", "events\kids-balloon-arch.jpg", 1200),
  @("photo-1709423166198-cc44576fbe72", "events\dessert-table.jpg", 1200),
  @("photo-1758548204223-b830a3224f73", "events\cupcake-display.jpg", 1200),
  @("photo-1768776183122-95c7d3adbf3e", "events\marquee-letters.jpg", 1200)
)

$ok = 0; $fail = 0
foreach ($it in $items) {
  $id = $it[0]; $out = Join-Path $root $it[1]; $w = $it[2]
  $url = "$base$id`?fm=jpg&q=70&w=$w&auto=format&fit=crop"
  try {
    & curl.exe -s -L -o $out $url
    $size = (Get-Item $out).Length
    if ($size -gt 8000) { Write-Host ("OK   {0,-45} {1,8} bytes" -f $it[1], $size); $ok++ }
    else { Write-Host ("SMALL {0} ({1} bytes)" -f $it[1], $size); $fail++ }
  } catch {
    Write-Host ("FAIL {0}: {1}" -f $it[1], $_.Exception.Message); $fail++
  }
}
Write-Host ""
Write-Host ("Done. {0} ok, {1} failed." -f $ok, $fail)
