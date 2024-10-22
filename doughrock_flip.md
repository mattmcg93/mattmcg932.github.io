---
layout: doughrock
title:  "DOUGHROCK FLIP"
excerpt: "DOUGHROCK FLIP"
image: /assets/images/Venus.PNG
---

<div class="center" style="background-color: black; padding: 0; margin: 0; height: 100vh; width: 100vw;">
    <div class="imgbox" id="image-container" style="display: flex; align-items: center; justify-content: center; height: 100%; width: 100%;">
        <img id="slideshow" src="https://dl.dropbox.com/scl/fi/0gtuqbpf7lm96xzdxeokx/capture1.jpg" alt="Slideshow Image" style="width: 100vw; height: 100vh; object-fit: fill; margin: 0;" />
    </div>
</div>

<script>
// List of image URLs
let images = [
    'https://dl.dropbox.com/scl/fi/0gtuqbpf7lm96xzdxeokx/capture1.jpg',
    'https://dl.dropbox.com/scl/fi/uy7wnnd292doq8ipq4ref/captureEthernet.jpg',
    'https://dl.dropbox.com/scl/fi/xh5ml5to3afne3zyhsnbb/capture3.jpg'
];

let currentIndex = 0; // Start with the first image

function updateSlideshowImage() {
    let imageElement = document.getElementById('slideshow');
    let newImg = new Image(); // Create a new image object
    let timestamp = new Date().getTime(); // Prevent caching by appending a timestamp

    // Set new image URL with timestamp to avoid caching issues
    newImg.src = images[currentIndex] + '?t=' + timestamp;
    newImg.alt = "Slideshow Image"; 

    newImg.onload = function() {
        // Only replace the image source once the new image has fully loaded
        imageElement.src = newImg.src;
    }

    newImg.onerror = function() {
        console.error("Failed to load image: " + newImg.src);
    }

    // Increment the index to show the next image, cycling back to the first image after the last one
    currentIndex = (currentIndex + 1) % images.length;
}

// Set the interval to change the image every 10 seconds (10000 ms)
setInterval(updateSlideshowImage, 10000);

// Initial image setup
updateSlideshowImage();
</script>
