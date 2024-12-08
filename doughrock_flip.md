---
layout: doughrock
title: "DOUGHROCK FLIP2"
excerpt: "DOUGHROCK FLIP2"
image: /assets/images/Venus.PNG
---

<div class="center" style="background-color: black; padding: 0; margin: 0; height: 100vh; width: 100vw; display: flex;">
    <!-- Two side-by-side images -->
    <div id="img1-container" 
         style="width: 50vw; height: 100vh; background-size: 100% 100%; background-repeat: no-repeat; background-position: center center;">
    </div>
    <div id="img2-container" 
         style="width: 50vw; height: 100vh; background-size: 100% 100%; background-repeat: no-repeat; background-position: center center;">
    </div>
</div>

<script>
let imageUrls = [
    'https://dl.dropbox.com/scl/fi/zhkwrx1kt7kc5s0ypduhx/capture1.jpg?rlkey=uigscdp62h8o0zkh5jr6m9hdv&st=s60u33u0&dl=1',
    'https://dl.dropbox.com/scl/fi/9wz46ajek7xtyxa5rtpag/captureEthernet.jpg?rlkey=vlsx4cdu5zd5ywdpqo2gyoq1j&st=giw1qvyp&dl=1'
];

// Preload and update images
function preloadAndSetBackground(containerId, imageUrl) {
    let timestamp = new Date().getTime();
    let newImage = new Image();
    newImage.src = imageUrl + '&t=' + timestamp; // Add timestamp to prevent caching

    newImage.onload = function() {
        // Only update background once the new image is fully loaded
        document.getElementById(containerId).style.backgroundImage = `url('${newImage.src}')`;
    };

    newImage.onerror = function() {
        console.error("Failed to load image: " + newImage.src);
    };
}

// Initial load
preloadAndSetBackground('img1-container', imageUrls[0]);
preloadAndSetBackground('img2-container', imageUrls[1]);

// Update both images every 10 seconds
setInterval(function() {
    preloadAndSetBackground('img1-container', imageUrls[0]);
    preloadAndSetBackground('img2-container', imageUrls[1]);
}, 5000);
</script>
