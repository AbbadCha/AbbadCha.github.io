#!/bin/bash

# Create directories for optimized images
mkdir -p images/slideshow/optimized

# Resize main slideshow images to 800x600
for img in images/slideshow/*.jpg; do
    filename=$(basename "$img")
    name="${filename%.*}"
    magick "$img" -resize 800x600^ -gravity center -extent 800x600 "images/slideshow/optimized/${name}-800x600.jpg"
    # Create thumbnail version 100x100
    magick "$img" -resize 100x100^ -gravity center -extent 100x100 "images/slideshow/optimized/${name}-100x100.jpg"
done
