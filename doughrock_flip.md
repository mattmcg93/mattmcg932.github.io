---
layout: doughrock
title: "DOUGHROCK FLIP"
excerpt: "DOUGHROCK FLIP2"
image: /assets/images/Venus.PNG
---

<div class="center" style="background-color: black; padding: 0; margin: 0; height: 100vh; width: 100vw;">
    <div class="imgbox" id="image-container" style="display: flex; align-items: center; justify-content: center; height: 100%; width: 100%;">
        <!-- Use an iframe to display the images -->
        <iframe id="image-frame" src="https://dl.dropbox.com/s/0gtuqbpf7lm96xzdxeokx/capture1.jpg?raw=1" style="width: 100vw; height: 100vh; border: none;"></iframe>
    </div>
</div>

<script>
// List of image URLs to rotate through
var images = [
    'https://dl.dropbox.com/s/0gtuqbpf7lm96xzdxeokx/capture1.jpg?raw=1',
    'https://dl.dropbox.com/s/uy7wnnd292doq8ipq4ref/captureEthernet.jpg?raw=1',
    'https://dl.dropbox.com/s/xh5ml5to3afne3zyhsnbb/capture3.jpg?raw=1'
];

var currentImageIndex = 0;

function updateIframeImage() {
    // Get the iframe element
    var iframe = document.getElementById('image-frame');
    
    // Move to the next image in the array
    currentImageIndex = (currentImageIndex + 1) % images.length;
    
    // Update the iframe's src to the next image URL
    iframe.src = images[currentImageIndex];
}

// Rotate the iframe's src every 4.5 seconds
setInterval(updateIframeImage, 4500);
</script>
