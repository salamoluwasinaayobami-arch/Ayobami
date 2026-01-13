$sourceDir = "C:\Users\HP\.gemini\antigravity\brain\75e727ae-ffbe-4903-ac87-fd7ea542887a"
$destDir = "c:\Users\HP\OneDrive\de\church-website\images"

New-Item -ItemType Directory -Force -Path $destDir

Copy-Item -Path "$sourceDir\church_hero_warm_light_1768311885623.png" -Destination "$destDir\hero.png" -Force
Copy-Item -Path "$sourceDir\church_cross_icon_subtle_1768311900821.png" -Destination "$destDir\cross.png" -Force

Write-Host "Assets copied successfully."
