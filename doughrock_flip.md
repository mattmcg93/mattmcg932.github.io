---
layout: doughrock
title:  "DOUGHROCK FLIP2"
excerpt: "DOUGHROCK FLIP2"
image: /assets/images/Venus.PNG
---

<div class="center" style="background-color: black; padding: 0; margin: 0; height: 100vh; width: 100vw;">
    <div class="imgbox" id="image-container" style="display: flex; align-items: center; justify-content: center; height: 100%; width: 100%;">
        <img id="slideshow" src="https://dl.dropbox.com/scl/fi/0gtuqbpf7lm96xzdxeokx/capture1.jpg" alt="Slideshow Image" style="width: 100vw; height: 100vh; object-fit: fill; margin: 0;" />
    </div>
</div>

<script>
// Image URLs array
let images = [
    'https://dl.dropbox.com/scl/fi/0gtuqbpf7lm96xzdxeokx/capture1.jpg',
    'https://dl.dropbox.com/scl/fi/uy7wnnd292doq8ipq4ref/captureEthernet.jpg',
    'https://dl.dropbox.com/scl/fi/xh5ml5to3afne3zyhsnbb/capture3.jpg'
];

let currentIndex = 0;

function showNextImage() {
    let imageElement = document.getElementById('slideshow');
    let newImg = new Image(); // Create a new Image object
    let timestamp = new Date().getTime(); // Prevent caching

    // Set new image source and timestamp to prevent cache issues
    newImg.src = images[currentIndex] + '?t=' + timestamp;
    newImg.alt = "Slideshow Image";

    newImg.onload = function() {
        // Change the image only when the new one has successfully loaded
        imageElement.src = newImg.src;
    }

    newImg.onerror = function() {
        console.error("Failed to load image: " + newImg.src);
    }

    currentIndex = (currentIndex + 1) % images.length; // Cycle through images
}

// Set the interval to change the image every 10 seconds
setInterval(showNextImage, 10000);
</script>
