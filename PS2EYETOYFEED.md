---
layout: post
title:  "DOUGHROCKa"
excerpt: "DOUGHROCKa"
image: /assets/images/Venus.PNG
---

<div class="center">
    <div class="imgbox">
        <img id="camara2" src="https://dl.dropbox.com/scl/fi/5f09j1aix76rbw5ci2nqh/capture.jpg?rlkey=grfyzmz93k1m1yl7owtx9kcgc&st=ec613gi4&dl=1" alt="Image 2" width="100%" />
        <img id="camara3" src="https://dl.dropbox.com/scl/fi/gfsafvb07kt4ymeu3fe3p/captureEthernet.jpg?rlkey=e1pl61w40gj3uzkkp0cw6qe6t&st=ezs0fdvr&dl=1" alt="Image 3" width="100%" />
        <img id="camara4" src="https://dl.dropbox.com/scl/fi/7bgvdfr7uqm0jhf6wnyt5/capture2.jpg?rlkey=vbtm8501gs5ofil646bxh2w5r&st=o8y85ozb&dl=1" alt="Image 4" width="100%" />
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
    newImg.width = oldImg.width;
    newImg.id = imageId;

    newImg.onload = function() {
        // Replace the old image source only after the new image has successfully loaded
        oldImg.src = newImg.src;
    }

    newImg.onerror = function() {
        console.error("Failed to load image: " + newImg.src);
    }
}

// Update the camara2 image every 15 seconds
setInterval(function() {
    updateImage('camara2', 'https://dl.dropbox.com/scl/fi/5f09j1aix76rbw5ci2nqh/capture.jpg?rlkey=grfyzmz93k1m1yl7owtx9kcgc&st=ec613gi4&dl=1');
}, 15000);

// Update the camara3 image every 15 seconds
setInterval(function() {
    updateImage('camara3', 'https://www.dropbox.com/scl/fi/gfsafvb07kt4ymeu3fe3p/captureEthernet.jpg?rlkey=e1pl61w40gj3uzkkp0cw6qe6t&st=ezs0fdvr&dl=1');
}, 15000);

// Update the camara4 image every 15 seconds
setInterval(function() {
    updateImage('camara4', 'https://dl.dropbox.com/scl/fi/7bgvdfr7uqm0jhf6wnyt5/capture2.jpg?rlkey=vbtm8501gs5ofil646bxh2w5r&st=o8y85ozb&dl=1');
}, 15000);
</script>
