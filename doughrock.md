---
layout: doughrock
title: "DOUGHROCK FLIP2"
excerpt: "DOUGHROCK FLIP2"
image: /assets/images/Venus.PNG
---

<div class="center" style="background-color: black; padding: 0; margin: 0; height: 100vh; width: 100vw;">
    <div class="imgbox" id="image-container" style="display: flex; align-items: center; justify-content: center; height: 100%; width: 100%;">
        <img id="camara" src="https://dl.dropbox.com/s/0gtuqbpf7lm96xzdxeokx/capture1.jpg?dl=1" alt="Camera Image" style="width: 100vw; height: 100vh; object-fit: contain; margin: 0; transform-origin: 0 0;" />
    </div>
</div>

<style>
    .zoom-container {
        transform: scale(1.5); /* Use scale for zoom effect */
        transform-origin: 0 0; /* Ensures scaling from top-left */
    }

    /* Optional: Adjust zoom level based on screen size */
    @media (max-width: 768px) {
        .zoom-container {
            transform: scale(1.2); /* Reduce zoom on small screens */
        }
    }
</style>

<script>
// List of images to cycle through
var images = [
    'https://dl.dropbox.com/s/0gtuqbpf7lm96xzdxeokx/capture1.jpg?dl=1',
    'https://dl.dropbox.com/s/uy7wnnd292doq8ipq4ref/captureEthernet.jpg?dl=1',
    'https://dl.dropbox.com/s/xh5ml5to3afne3zyhsnbb/capture3.jpg?dl=1'
];

var currentImageIndex = 0;

function updateImage(imageId) {
    var oldImg = document.getElementById(imageId);
    var newImg = new Image();

    // Get the next image URL from the array and update the index
    currentImageIndex = (currentImageIndex + 1) % images.length;
    var imageUrl = images[currentImageIndex];

    newImg.src = imageUrl;
    newImg.alt = oldImg.alt;
    newImg.id = imageId;

    // Replace old image when new image loads successfully
    newImg.onload = function() {
        oldImg.src = newImg.src;
    };

    // Handle image load errors
    newImg.onerror = function() {
        console.error("Failed to load image: " + newImg.src);
    };
}

// Update the image every 4.5 seconds
setInterval(function() {
    updateImage('camara');
}, 4500);
</script>
