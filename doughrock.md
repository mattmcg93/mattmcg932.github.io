---
layout: doughrock
title:  "DOUGHROCK"
excerpt: "DOUGHROCK"
image: /assets/images/Venus.PNG
---

<div class="center">
    <h1 style="text-align:center;">Welcome to Doughrock</h1>

    <div class="imgbox" id="image-container" style="display: flex; justify-content: center;">
        <img id="camara2" src="https://dl.dropbox.com/scl/fi/15ptzc387q1f7mqd79l83/captureEthernet.jpg?rlkey=mppr5vg8j0u7rii9dsxsasszg&st=4uujot64&dl=1" alt="Image 2" />
        <img id="camara4" src="https://dl.dropbox.com/scl/fi/xh5ml5to3afne3zyhsnbb/capture3.jpg?rlkey=0d4f26lwyyvx4amyngsvy37d9&st=kla64jwv&dl=1" alt="Image 4" />
        <img id="camara5" src="https://dl.dropbox.com/scl/fi/9ana9eoxf3yob6kopqix6/capture4.jpg?rlkey=joehtgx3n67v48vd525zz9vrn&st=0h5hfxhp&dl=1" alt="Image 5" />
    </div>

    <h2 style="text-align:center;">Most recently detected object (last 24H):</h2>
    <div class="imgbox" id="detected-image-container" style="display: flex; justify-content: center;">
        <img id="detectedImage" src="https://dl.dropbox.com/scl/fi/xlzeauxyfl6y92qnhpyuq/latest_detection.gif?rlkey=0irbs19icrryih1ceas720h82&st=2xcy3viw&dl=1" alt="Most Recently Detected Object" style="display: block; margin: 0 auto;" />
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
    updateImage('camara2', 'https://dl.dropbox.com/scl/fi/15ptzc387q1f7mqd79l83/captureEthernet.jpg?rlkey=mppr5vg8j0u7rii9dsxsasszg&st=4uujot64&dl=1');
    updateImage('camara4', 'https://dl.dropbox.com/scl/fi/xh5ml5to3afne3zyhsnbb/capture3.jpg?rlkey=0d4f26lwyyvx4amyngsvy37d9&st=kla64jwv&dl=1');
    updateImage('camara5', 'https://dl.dropbox.com/scl/fi/9ana9eoxf3yob6kopqix6/capture4.jpg?rlkey=joehtgx3n67v48vd525zz9vrn&st=0h5hfxhp&dl=1');
    updateImage('detectedImage', 'https://dl.dropbox.com/scl/fi/xlzeauxyfl6y92qnhpyuq/latest_detection.gif?rlkey=0irbs19icrryih1ceas720h82&st=2xcy3viw&dl=1');
}, 4500);

function arrangeImages() {
    const imageContainer = document.getElementById('image-container');
    const detectedImageContainer = document.getElementById('detected-image-container');
    const images = imageContainer.getElementsByTagName('img');
    const detectedImage = document.getElementById('detectedImage');
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
        // Small screen (e.g., phones in portrait mode): Display images in a column
        imageContainer.style.flexDirection = 'column';
        detectedImageContainer.style.flexDirection = 'column';
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = 'block';
            images[i].style.width = 'auto';
            images[i].style.height = 'calc(100vh / ' + images.length + ')';
            images[i].style.marginBottom = '10px';
        }
        detectedImage.style.display = 'block';
        detectedImage.style.width = 'auto';
        detectedImage.style.height = 'calc(100vh / 4)'; // Adjust height for detected image
        detectedImage.style.marginBottom = '10px';
    } else {
        // Larger screens (e.g., tablets/PCs in landscape mode): Display images in a row
        imageContainer.style.flexDirection = 'row';
        detectedImageContainer.style.flexDirection = 'row';
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = 'block';
            images[i].style.width = 'calc(100vw / ' + images.length + ')';
            images[i].style.height = 'auto';
            images[i].style.marginBottom = '0';
        }
        detectedImage.style.display = 'block';
        detectedImage.style.width = 'calc(100vw / 4)'; // Adjust width for detected image
        detectedImage.style.height = 'auto';
        detectedImage.style.marginBottom = '0';
    }
}

function handleOrientationChange() {
    arrangeImages();
}

window.addEventListener('resize', handleOrientationChange);

// Initial arrangement on page load
arrangeImages();
</script>
