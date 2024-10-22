---
layout: doughrock
title: "DOUGHROCK FLIP2"
excerpt: "DOUGHROCK FLIP2"
image: /assets/images/Venus.PNG
---

<div class="center" style="background-color: black; padding: 0; margin: 0; height: 100vh; width: 100vw;">
    <div class="imgbox" id="image-container" style="display: flex; align-items: center; justify-content: center; height: 100%; width: 100%;">
        <img id="camara" src="https://dl.dropbox.com/s/0gtuqbpf7lm96xzdxeokx/capture1.jpg?raw=1" alt="Rotating Image" style="width: 100vw; height: 100vh; object-fit: contain; margin: 0;" />
    </div>
</div>

<script>
// List of images to rotate through
var images = [
    'https://dl.dropbox.com/s/0gtuqbpf7lm96xzdxeokx/capture1.jpg?raw=1',
    'https://dl.dropbox.com/s/uy7wnnd292doq8ipq4ref/captureEthernet.jpg?raw=1',
    'https://dl.dropbox.com/s/xh5ml5to3afne3zyhsnbb/capture3.jpg?raw=1'
];

var currentImageIndex = 0;

function updateImage() {
    // Get the image element
    var imgElement = document.getElementById('camara');
    
    // Move to the next image in the array
    currentImageIndex = (currentImageIndex + 1) % images.length;
    
    // Update the image source
    imgElement.src = images[currentImageIndex];
}

// Rotate the image every 4.5 seconds
setInterval(updateImage, 4500);
</script>
