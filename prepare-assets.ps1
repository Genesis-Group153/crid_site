# PowerShell script to prepare assets for CRID International website
# Run this script from the project root directory

Write-Host "CRID International - Asset Preparation Script" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""

# Create public/crid directory if it doesn't exist
$cridDir = "public\crid"
if (-not (Test-Path $cridDir)) {
    New-Item -ItemType Directory -Force -Path $cridDir | Out-Null
    Write-Host "Created $cridDir directory" -ForegroundColor Green
} else {
    Write-Host "$cridDir directory already exists" -ForegroundColor Green
}

Write-Host ""
Write-Host "Copying and renaming assets..." -ForegroundColor Yellow
Write-Host ""

# Function to copy and rename file
function Copy-Asset {
    param(
        [string]$Source,
        [string]$Destination
    )
    
    if (Test-Path $Source) {
        Copy-Item $Source $Destination -Force
        Write-Host "Copied: $Source -> $Destination" -ForegroundColor Green
        return $true
    } else {
        Write-Host "Not found: $Source" -ForegroundColor Red
        return $false
    }
}

# Copy logo
$logoFound = Copy-Asset "Logo.png" "$cridDir\logo.png"

# Copy community images
$comm1 = Copy-Asset "Community 1.jpeg" "$cridDir\community-1.jpg"
$comm2 = Copy-Asset "Community 2.jpeg" "$cridDir\community-2.jpg"
$comm3 = Copy-Asset "Community 3.jpeg" "$cridDir\community-3.jpg"

# Copy profile images
$prof1 = Copy-Asset "Profile.jpeg" "$cridDir\profile-1.jpg"
$prof2 = Copy-Asset "Profile 2.jpeg" "$cridDir\profile-2.jpg"

Write-Host ""
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host "PDF Conversion Required" -ForegroundColor Yellow
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""

# Check for document files
$docFile = $null
if (Test-Path "CRID INTERNATIONAL ltd Profile.dot") {
    $docFile = "CRID INTERNATIONAL ltd Profile.dot"
} elseif (Test-Path "Profiles.docx") {
    $docFile = "Profiles.docx"
}

if ($docFile) {
    Write-Host "Found document: $docFile" -ForegroundColor Yellow
    Write-Host "Please manually convert this to PDF:" -ForegroundColor Yellow
    Write-Host "  1. Open the file in Microsoft Word" -ForegroundColor White
    Write-Host "  2. File -> Save As -> PDF" -ForegroundColor White
    Write-Host "  3. Save as: $cridDir\CRID-International-Profile.pdf" -ForegroundColor White
} else {
    Write-Host "Document file not found (looking for .dot or .docx)" -ForegroundColor Red
}

Write-Host ""
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host "Summary" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""

# Count successful copies
$successCount = 0
if ($logoFound) { $successCount++ }
if ($comm1) { $successCount++ }
if ($comm2) { $successCount++ }
if ($comm3) { $successCount++ }
if ($prof1) { $successCount++ }
if ($prof2) { $successCount++ }

Write-Host "Files copied: $successCount/6" -ForegroundColor $(if ($successCount -eq 6) { "Green" } else { "Yellow" })

# Check if PDF exists
if (Test-Path "$cridDir\CRID-International-Profile.pdf") {
    Write-Host "PDF found: Yes" -ForegroundColor Green
} else {
    Write-Host "PDF found: No (manual conversion required)" -ForegroundColor Yellow
}

Write-Host ""

if ($successCount -eq 6 -and (Test-Path "$cridDir\CRID-International-Profile.pdf")) {
    Write-Host "All assets ready! You can now run: npm run dev" -ForegroundColor Green
} else {
    Write-Host "Some assets are missing. Please review the messages above." -ForegroundColor Yellow
    Write-Host "  The website will still run, but some images may not display." -ForegroundColor Gray
}

Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "  1. Review the assets in: $cridDir" -ForegroundColor White
Write-Host "  2. Install dependencies: npm install" -ForegroundColor White
Write-Host "  3. Run development server: npm run dev" -ForegroundColor White
Write-Host ""

