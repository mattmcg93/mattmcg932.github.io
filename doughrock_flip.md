---
layout: doughrock
title:  "DOUGHROCK FLIP"
excerpt: "DOUGHROCK FLIP"
image: /assets/images/Venus.PNG
---

<div class="center">
    <h1 style="text-align:center;">Welcome to Doughrock</h1>

    <div class="imgbox" id="image-container" style="display: flex; justify-content: center;">
        <img id="camara2" src="https://dl.dropbox.com/scl/fi/l8xbeyhn7x0tyru79s8p1/captureEthernet.jpg?rlkey=sbs9kzxctced7zgwki4ylqgkc&st=t6drd9pr&dl=1" alt="Image 2" />
        <img id="camara4" src="https://dl.dropbox.com/scl/fi/xh5ml5to3afne3zyhsnbb/capture3.jpg?rlkey=0d4f26lwyyvx4amyngsvy37d9&st=kla64jwv&dl=1" alt="Image 4" />
    </div>

    <button id="toggleButton" onclick="toggleLED()">Toggle LED</button>
    <p id="ledStatus">LED is OFF</p>
</div>

<script>
var ledState = false;

function toggleLED() {
    var toggleButton = document.getElementById('toggleButton');
    var ledStatus = document.getElementById('ledStatus');

    if (ledState) {
        // Turn LED off
        ledState = false;
        toggleButton.textContent = "Turn LED On";
        ledStatus.textContent = "LED is OFF";
    } else {
        // Turn LED on
        ledState = true;
        toggleButton.textContent = "Turn LED Off";
        ledStatus.textContent = "LED is ON";
    }
}

function updateImage(imageId, imageUrl) {
    var oldImg = document.getElementById(imageId);
    var newImg = new Image();
    var timestamp = new Date().getTime(); // Add timestamp to prevent caching

    newImg.src = imageUrl + '&t=' + timestamp;
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

// Update each camera image every 15 seconds
setInterval(function() {
    updateImage('camara2', 'https://dl.dropbox.com/scl/fi/l8xbeyhn7x0tyru79s8p1/captureEthernet.jpg?rlkey=sbs9kzxctced7zgwki4ylqgkc&st=t6drd9pr&dl=1');
    updateImage('camara4', 'https://dl.dropbox.com/scl/fi/xh5ml5to3afne3zyhsnbb/capture3.jpg?rlkey=0d4f26lwyyvx4amyngsvy37d9&st=kla64jwv&dl=1');
}, 4500);

function arrangeImages() {
    const imageContainer = document.getElementById('image-container');
    const images = imageContainer.getElementsByTagName('img');
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
        // Small screen (e.g., phones in portrait mode): Display images in a column
        imageContainer.style.flexDirection = 'column';
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = 'block';
            images[i].style.width = 'auto';
            images[i].style.height = 'calc(100vh / ' + images.length + ')';
            images[i].style.marginBottom = '10px';
        }
    } else {
        // Larger screens (e.g., tablets/PCs in landscape mode): Display images in a row
        imageContainer.style.flexDirection = 'row';
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = 'block';
            images[i].style.width = 'calc(100vw / ' + images.length + ')';
            images[i].style.height = 'auto';
            images[i].style.marginBottom = '0';
        }
    }
}

function handleOrientationChange() {
    arrangeImages();
}

window.addEventListener('resize', handleOrientationChange);

// Initial arrangement on page load
arrangeImages();
</script>
