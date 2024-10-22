---
layout: doughrock
title:  "DOUGHROCK FLIP"
excerpt: "DOUGHROCK FLIP2"
image: /assets/images/Venus.PNG
---

<div class="center" style="background-color: black; padding: 0; margin: 0; height: 100vh; width: 100vw;">
    <div class="imgbox" id="image-container" style="display: flex; align-items: center; justify-content: center; height: 100%; width: 100%;">
        <img id="slideshow" src="https://dl.dropbox.com/scl/fi/0gtuqbpf7lm96xzdxeokx/capture1.jpg" alt="Slideshow Image" style="width: 100vw; height: 100vh; object-fit: fill; margin: 0;" />
    </div>
</div>

<script>
let imageUrls = [
    'https://dl.dropbox.com/scl/fi/0gtuqbpf7lm96xzdxeokx/capture1.jpg',
    'https://dl.dropbox.com/scl/fi/uy7wnnd292doq8ipq4ref/captureEthernet.jpg',
    'https://dl.dropbox.com/scl/fi/xh5ml5to3afne3zyhsnbb/capture3.jpg'
];

let currentIndex = 0;

function updateImage(imageId, imageUrl) {
    var oldImg = document.getElementById(imageId);
    var newImg = new Image();
    var timestamp = new Date().getTime(); // Add timestamp to prevent caching

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

// Rotate between the three URLs every 10 seconds
setInterval(function() {
    currentIndex = (currentIndex + 1) % imageUrls.length; // Cycle through the URLs
    updateImage('slideshow', imageUrls[currentIndex]);
}, 10000);

</script>
