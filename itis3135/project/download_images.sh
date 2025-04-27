#!/bin/bash

# Create directories if they don't exist
mkdir -p images/portfolio
mkdir -p images/blog

# Download hero image
curl -L "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1600&q=80" -o images/hero-bg.jpg

# Download portfolio images
curl -L "https://images.unsplash.com/photo-1537907690979-ee8e01276184?w=800&q=80" -o images/portfolio/wedding1.jpg
curl -L "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80" -o images/portfolio/wedding2.jpg
curl -L "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" -o images/portfolio/wedding3.jpg
curl -L "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80" -o images/portfolio/portrait1.jpg
curl -L "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80" -o images/portfolio/portrait2.jpg
curl -L "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&q=80" -o images/portfolio/portrait3.jpg
curl -L "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80" -o images/portfolio/event1.jpg
curl -L "https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=800&q=80" -o images/portfolio/event2.jpg
curl -L "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80" -o images/portfolio/event3.jpg

# Download blog images
curl -L "https://images.unsplash.com/photo-1494947665470-20322015e3a8?w=800&q=80" -o images/blog1.jpg
curl -L "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80" -o images/blog2.jpg
curl -L "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80" -o images/blog3.jpg
