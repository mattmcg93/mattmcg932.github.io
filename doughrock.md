---
layout: doughrock
title: "DOUGHROCK"
excerpt: "DOUGHROCK"
image: /assets/images/Venus.PNG
---

<div class="center">
    <h1 style="text-align:center;">Welcome to Doughrock</h1>

    <div class="imgbox" id="image-container" style="display: flex; justify-content: center;">
        <img id="camara2" src="https://dl.dropbox.com/scl/fi/ny4n7jpq8f4s2miofbmer/captureEthernet.jpg?rlkey=i2blc0ytp341q3owb7xnsakt6&st=m15lnn23&dl=1" alt="Image 2" />
        <img id="camara4" src="https://dl.dropbox.com/scl/fi/xh5ml5to3afne3zyhsnbb/capture3.jpg?rlkey=0d4f26lwyyvx4amyngsvy37d9&st=kla64jwv&dl=1" alt="Image 4" />
        <img id="camara5" src="https://dl.dropbox.com/scl/fi/9ana9eoxf3yob6kopqix6/capture4.jpg?rlkey=joehtgx3n67v48vd525zz9vrn&st=0h5hfxhp&dl=1" alt="Image 5" />
    </div>

    <h2 style="text-align:center;">Most recently detected object (last 24hrs):</h2>
    <div class="imgbox" id="detected-image-container" style="display: flex; justify-content: center;">
        <video id="detectedVideo" controls style="display: block; margin: 0 auto;">
            <source src="https://www.dropbox.com/scl/fi/9d060e35st618r3n8bchs/latest_detection.mp4?rlkey=e4b13p40ryxw5aicwm9pnnd3b&st=ss4e4uf3&dl=1" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>

    <h2 style="text-align:center;">Temperature Plots:</h2>
    <div class="imgbox" id="temperature-plots-container" style="display: flex; justify-content: center; flex-wrap: wrap;">
        <img id="temperaturePlot1" src="https://dl.dropbox.com/scl/fi/eigsn29f0l6gjidwvf39i/raspiEth_temperature_plot.png?rlkey=oh1iibifer1cnozskt6xipk1k&st=3hxg6thl&dl=1" alt="Temperature Plot 1" style="max-width: 100%; height: auto; margin: 5px;" />
        <img id="temperaturePlot2" src="https://dl.dropbox.com/scl/fi/32h51p1ote83yb3hmy4kq/raspi3_temperature_plot.png?rlkey=br3v0tj6fg8cci6uf9p0txwtu&st=i0r6p7kg&dl=1" alt="Temperature Plot 2" style="max-width: 100%; height: auto; margin: 5px;" />
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

function updateTemperaturePlot(plotId, plotUrl) {
    var oldPlot = document.getElementById(plotId);
    var newPlot = new Image();
    var timestamp = new Date().getTime(); // Add timestamp to prevent caching

    newPlot.src = plotUrl + '&t=' + timestamp;
    newPlot.alt = oldPlot.alt;
    newPlot.id = plotId;

    newPlot.onload = function() {
        // Replace the old image source only after the new image has successfully loaded
        oldPlot.src = newPlot.src;
    }

    newPlot.onerror = function() {
        console.error("Failed to load image: " + newPlot.src);
    }
}

function loadVideoOnce(videoId, videoUrl) {
    var videoElement = document.getElementById(videoId);
    var timestamp = new Date().getTime(); // Add timestamp to prevent caching
    videoElement.src = videoUrl + '&t=' + timestamp;
}

// Update each camera image and temperature plot every 15 seconds
setInterval(function() {
    updateImage('camara2', 'https://dl.dropbox.com/scl/fi/ny4n7jpq8f4s2miofbmer/captureEthernet.jpg?rlkey=i2blc0ytp341q3owb7xnsakt6&st=m15lnn23&dl=1');
    updateImage('camara4', 'https://dl.dropbox.com/scl/fi/xh5ml5to3afne3zyhsnbb/capture3.jpg?rlkey=0d4f26lwyyvx4amyngsvy37d9&st=kla64jwv&dl=1');
    updateImage('camara5', 'https://dl.dropbox.com/scl/fi/9ana9eoxf3yob6kopqix6/capture4.jpg?rlkey=joehtgx3n67v48vd525zz9vrn&st=0h5hfxhp&dl=1');
    updateTemperaturePlot('temperaturePlot1', 'https://dl.dropbox.com/scl/fi/eigsn29f0l6gjidwvf39i/raspiEth_temperature_plot.png?rlkey=oh1iibifer1cnozskt6xipk1k&st=3hxg6thl&dl=1');
    updateTemperaturePlot('temperaturePlot2', 'https://dl.dropbox.com/scl/fi/32h51p1ote83yb3hmy4kq/raspi3_temperature_plot.png?rlkey=br3v0tj6fg8cci6uf9p0txwtu&st=i0r6p7kg&dl=1');
}, 15000); // 15 seconds interval

// Load the video once when the page loads
window.onload = function() {
    loadVideoOnce('detectedVideo', 'https://www.dropbox.com/scl/fi/9d060e35st618r3n8bchs/latest_detection.mp4?rlkey=e4b13p40ryxw5aicwm9pnnd3b&st=ss4e4uf3&dl=1');
};

function arrangeImages() {
    const imageContainer = document.getElementById('image-container');
    const detectedImageContainer = document.getElementById('detected-image-container');
    const temperaturePlotsContainer = document.getElementById('temperature-plots-container');
    const images = imageContainer.getElementsByTagName('img');
    const detectedVideo = document.getElementById('detectedVideo');
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
        // Small screen (e.g., phones in portrait mode): Display images in a column
        imageContainer.style.flexDirection = 'column';
        detectedImageContainer.style.flexDirection = 'column';
        temperaturePlotsContainer.style.flexDirection = 'column';
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = 'block';
            images[i].style.width = 'auto';
            images[i].style.height = 'calc(100vh / ' + images.length + ')';
            images[i].style.marginBottom = '10px';
        }
        detectedVideo.style.display = 'block';
        detectedVideo.style.width = 'auto';
        detectedVideo.style.height = 'calc(100vh / 4)'; // Adjust height for detected video
        detectedVideo.style.marginBottom = '10px';
        temperaturePlotsContainer.style.display = 'block';
        temperaturePlotsContainer.style.width = 'auto';
        temperaturePlotsContainer.style.height = 'calc(100vh / 4)'; // Adjust height for temperature plots
    } else {
        // Larger screens (e.g., tablets/PCs in landscape mode): Display images in a row
        imageContainer.style.flexDirection = 'row';
        detectedImageContainer.style.flexDirection = 'row';
        temperaturePlotsContainer.style.flexDirection = 'row';
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = 'block';
            images[i].style.width = 'calc(100vw / ' + images.length + ')';
            images[i].style.height = 'auto';
            images[i].style.marginBottom = '0';
        }
        detectedVideo.style.display = 'block';
        detectedVideo.style.width = 'calc(100vw / 4)'; // Adjust width for detected video
        detectedVideo.style.height = 'auto';
        detectedVideo.style.marginBottom = '0';
        temperaturePlotsContainer.style.display = 'flex';
        temperaturePlotsContainer.style.width = 'calc(100vw / 2)'; // Adjust width for temperature plots
        temperaturePlotsContainer.style.height = 'auto';
    }
}

function handleOrientationChange() {
    arrangeImages();
}

window.addEventListener('resize', handleOrientationChange);

// Initial arrangement on page load
arrangeImages();
</script>
