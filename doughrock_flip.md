---
layout: doughrock
title:  "DOUGHROCK FLIP2"
excerpt: "DOUGHROCK FLIP2"
image: /assets/images/Venus.PNG
---

<div class="center" style="background-color: black; padding: 0; margin: 0; height: 100vh; width: 100vw;">
    <div class="imgbox" id="image-container" style="display: flex; align-items: center; justify-content: center; height: 100%; width: 100%;">
        <img id="camara" src="https://dl.dropbox.com/scl/fi/0gtuqbpf7lm96xzdxeokx/capture1.jpg" alt="Camera Image" style="width: 100vw; height: 100vh; object-fit: fill; margin: 0;" />
    </div>
</div>

<script>
var images = [
    'https://dl.dropbox.com/scl/fi/0gtuqbpf7lm96xzdxeokx/capture1.jpg',
    'https://dl.dropbox.com/scl/fi/uy7wnnd292doq8ipq4ref/captureEthernet.jpg',
    'https://dl.dropbox.com/scl/fi/xh5ml5to3afne3zyhsnbb/capture3.jpg'
];

var currentImageIndex = 0;

function updateImage(imageId) {
    var oldImg = document.getElementById(imageId);
    var newImg = new Image();
    var timestamp = new Date().getTime(); // Add timestamp to prevent caching

    // Get the next image URL from the array and update the index
    currentImageIndex = (currentImageIndex + 1) % images.length;
    var imageUrl = images[currentImageIndex];

    newImg.src = imageUrl + '?t=' + timestamp;
    newImg.alt = oldImg.alt;
    newImg.id = imageId;

    newImg.onload = function() {
        // Replace the old image source only after the new image has successfully loaded
        oldImg.src = newImg.src;
    }

    newImg.onerror = function() {
        console.error("Failed to load image: " + newImg.src);
    }
}

// Update the single image every 15 seconds
setInterval(function() {
    updateImage('camara');
}, 4500);

</script>
