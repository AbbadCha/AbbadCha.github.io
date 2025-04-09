#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p images

# Download and resize hero image
curl "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3" -o "images/hero-camera-orig.jpg"
convert "images/hero-camera-orig.jpg" -resize 200x150^ -gravity center -extent 200x150 "images/hero-camera.jpg"
rm "images/hero-camera-orig.jpg"

# Download and resize wedding image
curl "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3" -o "images/wedding-orig.jpg"
convert "images/wedding-orig.jpg" -resize 120x80^ -gravity center -extent 120x80 "images/wedding.jpg"
rm "images/wedding-orig.jpg"

# Download and resize portrait image
curl "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3" -o "images/portrait-orig.jpg"
convert "images/portrait-orig.jpg" -resize 120x80^ -gravity center -extent 120x80 "images/portrait.jpg"
rm "images/portrait-orig.jpg"

# Download and resize event image
curl "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3" -o "images/event-orig.jpg"
convert "images/event-orig.jpg" -resize 120x80^ -gravity center -extent 120x80 "images/event.jpg"
rm "images/event-orig.jpg"

# Optimize all images
find images/ -name "*.jpg" -exec convert {} -strip -quality 85 {} \;
