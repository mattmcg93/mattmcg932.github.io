---
layout: doughrock
title: "DOUGHROCK FLIP"
excerpt: "DOUGHROCK FLIP2"
image: /assets/images/Venus.PNG
---

<div class="center" style="background-color: black; padding: 0; margin: 0; height: 100vh; width: 100vw;">
    <div class="imgbox" id="image-container" 
         style="display: flex; align-items: center; justify-content: center; height: 100%; width: 100%;">
         
        <!-- Two images side by side -->
        <img id="img1" 
             src="https://dl.dropbox.com/scl/fi/zhkwrx1kt7kc5s0ypduhx/capture1.jpg?rlkey=uigscdp62h8o0zkh5jr6m9hdv&st=s60u33u0&dl=1" 
             alt="Image 1" 
             style="height: 100%; width: 50%; object-fit: cover; margin: 0; padding: 0;" />

        <img id="img2" 
             src="https://dl.dropbox.com/scl/fi/9wz46ajek7xtyxa5rtpag/captureEthernet.jpg?rlkey=vlsx4cdu5zd5ywdpqo2gyoq1j&st=giw1qvyp&dl=1" 
             alt="Image 2" 
             style="height: 100%; width: 50%; object-fit: cover; margin: 0; padding: 0;" />
    </div>
</div>

<script>
let imageUrls = [
    'https://dl.dropbox.com/scl/fi/zhkwrx1kt7kc5s0ypduhx/capture1.jpg?rlkey=uigscdp62h8o0zkh5jr6m9hdv&st=s60u33u0&dl=1',
    'https://dl.dropbox.com/scl/fi/9wz46ajek7xtyxa5rtpag/captureEthernet.jpg?rlkey=vlsx4cdu5zd5ywdpqo2gyoq1j&st=giw1qvyp&dl=1'
];

function updateImage(imageId, imageUrl) {
    var oldImg = document.getElementById(imageId);
    var newImg = new Image();
    var timestamp = new Date().getTime(); // Add timestamp to prevent caching

    newImg.src = imageUrl + '&t=' + timestamp;
    newImg.alt = oldImg.alt;
    newImg.id = imageId;
    newImg.style.height = "100%";
    newImg.style.width = "50%";
    newImg.style.objectFit = "cover";
    newImg.style.margin = "0";
    newImg.style.padding = "0";

    newImg.onload = function() {
        oldImg.src = newImg.src;
    }

    newImg.onerror = function() {
        console.error("Failed to load image: " + newImg.src);
    }
}

// Update both images every 10 seconds
setInterval(function() {
    updateImage('img1', imageUrls[0]);
    updateImage('img2', imageUrls[1]);
}, 10000);
</script>
