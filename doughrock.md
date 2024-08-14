---
layout: doughrock
title:  "DOUGHROCK"
excerpt: "DOUGHROCK"
image: /assets/images/Venus.PNG
---

<div class="center">
    <h1 style="text-align:center;">Welcome to Doughrock</h1>
    <div class="imgbox" id="image-container">
        <img id="camara1" src="https://dl.dropbox.com/scl/fi/5f09j1aix76rbw5ci2nqh/capture.jpg?rlkey=grfyzmz93k1m1yl7owtx9kcgc&st=ec613gi4&dl=1" alt="Image 1" />
        <img id="camara2" src="https://dl.dropbox.com/scl/fi/gfsafvb07kt4ymeu3fe3p/captureEthernet.jpg?rlkey=e1pl61w40gj3uzkkp0cw6qe6t&st=ezs0fdvr&dl=1" alt="Image 2" />
        <img id="camara3" src="https://dl.dropbox.com/scl/fi/71y3m53tjs58tyndp8j44/capture2.jpg?rlkey=sd96v7cv1vrimq62t6ixhxdto&st=trmgl5do&dl=1" alt="Image 3" />
        <img id="camara4" src="https://dl.dropbox.com/scl/fi/xh5ml5to3afne3zyhsnbb/capture3.jpg?rlkey=0d4f26lwyyvx4amyngsvy37d9&st=kla64jwv&dl=1" alt="Image 4" />
        <img id="camara5" src="https://dl.dropbox.com/scl/fi/9ana9eoxf3yob6kopqix6/capture4.jpg?rlkey=joehtgx3n67v48vd525zz9vrn&st=0h5hfxhp&dl=1" alt="Image 5" />
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

// Update each camara image every 15 seconds
setInterval(function() {
    updateImage('camara1', 'https://dl.dropbox.com/scl/fi/5f09j1aix76rbw5ci2nqh/capture.jpg?rlkey=grfyzmz93k1m1yl7owtx9kcgc&st=ec613gi4&dl=1');
    updateImage('camara2', 'https://dl.dropbox.com/scl/fi/gfsafvb07kt4ymeu3fe3p/captureEthernet.jpg?rlkey=e1pl61w40gj3uzkkp0cw6qe6t&st=ezs0fdvr&dl=1');
    updateImage('camara3', 'https://dl.dropbox.com/scl/fi/7bgvdfr7uqm0jhf6wnyt5/capture2.jpg?rlkey=vbtm8501gs5ofil646bxh2w5r&st=o8y85ozb&dl=1');
    updateImage('camara4', 'https://dl.dropbox.com/scl/fi/xh5ml5to3afne3zyhsnbb/capture3.jpg?rlkey=0d4f26lwyyvx4amyngsvy37d9&st=kla64jwv&dl=1');
    updateImage('camara5', 'https://dl.dropbox.com/scl/fi/9ana9eoxf3yob6kopqix6/capture4.jpg?rlkey=joehtgx3n67v48vd525zz9vrn&st=0h5hfxhp&dl=1');
}, 7500);

function arrangeImages() {
    const imageContainer = document.getElementById('image-container');
    const images = imageContainer.getElementsByTagName('img');
    const totalImages = images.length;

    for (let i = 0; i < totalImages; i++) {
        images[i].style.display = 'inline-block';
        images[i].style.width = '48%';
        images[i].style.margin = '1%';
        images[i].style.verticalAlign = 'top';  // Align images to the top
    }

    imageContainer.style.textAlign = 'center';
    imageContainer.style.display = 'flex';
    imageContainer.style.flexWrap = 'wrap';
    imageContainer.style.justifyContent = 'center';
}

arrangeImages();
</script>
