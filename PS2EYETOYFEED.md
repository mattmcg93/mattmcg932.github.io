---
layout: post
title:  "DOUGHROCK CAMS"
excerpt: "DOUGHROCK CAMS"
image: /assets/images/Venus.PNG
---

<div class="center">
    <div class="imgbox">
        <img id="camara2" src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYy-RT53rm-IKxNyGWpYngUCXknuassUelNvl1ZVoufbPfmsJCX6k5m94xYoVp69J6gAjxnbFUsh1KzgWDr-1QWiLZg=w958-h934?_=" alt="Image 2" width="100%" />
        <img id="camara3" src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihY75BKpmVeErJejpyZmyo8KFS3Kh5EtjcS6tSuEFnHqion2q0H7Ez0EtT16KbW-DMxgIPIVUIwKGRMGoc78Dmean4b7=w1920-h937?_=" alt="Image 3" width="100%" />
    </div>
    <button onclick="toggleLED()">Toggle LED</button>
    <p id="ledStatus" style="display: none;">LED is OFF</p>
</div>

<script>
var ledState = false; // false indicates LED is initially off

function updateImages() {
    var imgElement2 = document.getElementById('camara2');
    var imgElement3 = document.getElementById('camara3');
    var timestamp = new Date().getTime(); // Add timestamp to prevent caching
    imgElement2.src = "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYy-RT53rm-IKxNyGWpYngUCXknuassUelNvl1ZVoufbPfmsJCX6k5m94xYoVp69J6gAjxnbFUsh1KzgWDr-1QWiLZg=w958-h934?_=" + timestamp;
    imgElement3.src = "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihY75BKpmVeErJejpyZmyo8KFS3Kh5EtjcS6tSuEFnHqion2q0H7Ez0EtT16KbW-DMxgIPIVUIwKGRMGoc78Dmean4b7=w1920-h937?_=" + timestamp;
}

// Update the images every second
setInterval(updateImages, 1000);

function toggleLED() {
    var textElement = document.getElementById('ledStatus');
    if (ledState) {
        ledState = false;
        textElement.innerHTML = 'LED is OFF';
    } else {
        ledState = true;
        textElement.innerHTML = 'LED is ON';
    }
    textElement.style.display = (textElement.style.display === 'none') ? 'block' : 'none';
}
</script>
