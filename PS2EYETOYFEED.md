---
layout: post
title:  "DOUGHROCK"
excerpt: "DOUGHROCK"
image: /assets/images/Venus.PNG
---

<div class="center">
    <div class="imgbox">
        <img id="camara2" src="https://dl.dropbox.com/scl/fi/5f09j1aix76rbw5ci2nqh/capture.jpg?rlkey=grfyzmz93k1m1yl7owtx9kcgc&st=ec613gi4&dl=1" alt="Image 2" width="100%" />
        <img id="camara3" src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihY75BKpmVeErJejpyZmyo8KFS3Kh5EtjcS6tSuEFnHqion2q0H7Ez0EtT16KbW-DMxgIPIVUIwKGRMGoc78Dmean4b7=w1920-h937?_=" alt="Image 3" width="100%" />
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

function updateImage() {
    var img = document.getElementById('camara2');
    var timestamp = new Date().getTime(); // Add timestamp to prevent caching
    img.src = 'https://dl.dropbox.com/scl/fi/5f09j1aix76rbw5ci2nqh/capture.jpg?rlkey=grfyzmz93k1m1yl7owtx9kcgc&st=ec613gi4&dl=1' + '&t=' + timestamp;
}

// Update the image every 15 seconds
setInterval(updateImage, 15000);
</script>
