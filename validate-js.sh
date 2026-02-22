#!/bin/bash

echo "=== JavaScript Validation ==="
echo ""

# Check if all required files exist
echo "Checking file existence..."
files=(
  "js/navigation.js"
  "js/animations.js"
  "js/content-loader.js"
  "js/main.js"
  "index.html"
)

all_exist=true
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "✓ $file exists"
  else
    echo "✗ $file missing"
    all_exist=false
  fi
done

echo ""

# Check for syntax errors using basic grep patterns
echo "Checking for common syntax issues..."

# Check for unmatched braces (basic check)
for jsfile in js/*.js; do
  if [ -f "$jsfile" ]; then
    open_braces=$(grep -o '{' "$jsfile" | wc -l)
    close_braces=$(grep -o '}' "$jsfile" | wc -l)
    if [ "$open_braces" -eq "$close_braces" ]; then
      echo "✓ $jsfile: Braces balanced ($open_braces pairs)"
    else
      echo "✗ $jsfile: Braces unbalanced (open: $open_braces, close: $close_braces)"
    fi
  fi
done

echo ""

# Check for required classes
echo "Checking for required classes..."
if grep -q "class NavigationController" js/navigation.js; then
  echo "✓ NavigationController class found"
else
  echo "✗ NavigationController class not found"
fi

if grep -q "class ScrollManager" js/navigation.js; then
  echo "✓ ScrollManager class found"
else
  echo "✗ ScrollManager class not found"
fi

if grep -q "class AnimationController" js/animations.js; then
  echo "✓ AnimationController class found"
else
  echo "✗ AnimationController class not found"
fi

echo ""

# Check for initialization function
echo "Checking for initialization..."
if grep -q "function initializeApp" js/main.js; then
  echo "✓ initializeApp function found"
else
  echo "✗ initializeApp function not found"
fi

if grep -q "DOMContentLoaded" js/main.js; then
  echo "✓ DOMContentLoaded listener found"
else
  echo "✗ DOMContentLoaded listener not found"
fi

echo ""

# Check for feature detection
echo "Checking for feature detection..."
if grep -q "IntersectionObserver" js/main.js; then
  echo "✓ Intersection Observer feature detection found"
else
  echo "✗ Intersection Observer feature detection not found"
fi

echo ""

# Check for error handling
echo "Checking for error handling..."
if grep -q "try {" js/main.js && grep -q "catch" js/main.js; then
  echo "✓ Try-catch error handling found"
else
  echo "✗ Try-catch error handling not found"
fi

if grep -q "console.error" js/main.js; then
  echo "✓ Error logging found"
else
  echo "✗ Error logging not found"
fi

echo ""

# Check script loading order in index.html
echo "Checking script loading order in index.html..."
if grep -q 'src="js/navigation.js"' index.html && \
   grep -q 'src="js/animations.js"' index.html && \
   grep -q 'src="js/main.js"' index.html; then
  echo "✓ All required scripts are loaded in index.html"
  
  # Check order
  nav_line=$(grep -n 'src="js/navigation.js"' index.html | cut -d: -f1)
  anim_line=$(grep -n 'src="js/animations.js"' index.html | cut -d: -f1)
  main_line=$(grep -n 'src="js/main.js"' index.html | cut -d: -f1)
  
  if [ "$nav_line" -lt "$main_line" ] && [ "$anim_line" -lt "$main_line" ]; then
    echo "✓ Scripts are loaded in correct order (components before main.js)"
  else
    echo "✗ Scripts may not be in correct order"
  fi
else
  echo "✗ Not all required scripts are loaded in index.html"
fi

echo ""
echo "=== Validation Complete ==="
