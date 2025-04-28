#!/bin/bash

# Create a temp directory for resized images
mkdir -p images/slideshow/temp

# Resize each image to 800x600 while maintaining aspect ratio
for img in images/slideshow/*.jpg; do
    filename=$(basename "$img")
    convert "$img" -resize '800x600>' "images/slideshow/temp/$filename"
done

# Move resized images back
mv images/slideshow/temp/* images/slideshow/
rmdir images/slideshow/temp
