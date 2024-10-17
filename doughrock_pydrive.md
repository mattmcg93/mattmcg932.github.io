---
layout: doughrock
title: "DOUGHROCK PYDRIVE"
excerpt: "DOUGHROCK PYDRIVE"
image: /assets/images/Venus.PNG
---

<div class="center">
    <h1 style="text-align:center;">Welcome to Doughrock2</h1>

    <div class="imgbox" id="image-container" style="display: flex; justify-content: center; flex-wrap: wrap;">
        <img id="camara1" src="https://drive.google.com/uc?export=view&id=10b5QfBtU1xx-qggz_UjoZn0sMfJmT9ZI" alt="Image 1" class="squeeze-aspect-ratio" />
        <img id="camara2" src="https://drive.google.com/uc?export=view&id=19KHRWco6o_U3SB1Zsof58MvGyPbO6j__" alt="Image 2" class="squeeze-aspect-ratio" />
        <img id="camara4" src="https://drive.google.com/uc?export=view&id=11yc6_LOWjh5L9pXkMV1-pV8QbidulJSQ" alt="Image 4" class="squeeze-aspect-ratio" />
        <img id="camara5" src="https://drive.google.com/uc?export=view&id=1prHvQ2rbwoUfv5nf-ig4mAGznxFbePXq" alt="Image 5" class="squeeze-aspect-ratio" />
    </div>

    <h2 style="text-align:center;">Most recently detected object (last 24hrs):</h2>
    <div class="imgbox" id="detected-image-container" style="display: flex; justify-content: center;">
        <video id="detectedVideo" controls style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
            <source src="https://dl.dropboxusercontent.com/scl/fi/9d060e35st618r3n8bchs/latest_detection.mp4?rlkey=e4b13p40ryxw5aicwm9pnnd3b&st=ss4e4uf3&dl=1" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>

    <h2 style="text-align:center;">Temperature Plots:</h2>
    <div class="imgbox" id="temperature-plots-container" style="display: flex; justify-content: center; flex-wrap: wrap;">
        <img id="temperaturePlot1" src="https://drive.google.com/uc?export=view&id=1CUPkHJvfNaihCiTkOycwY8zlptEwW5-r" alt="Temperature Plot 1" style="max-width: 100%; height: auto; margin: 5px;" />
        <img id="temperaturePlot2" src="https://drive.google.com/uc?export=view&id=1KNUjtFYwoI3hzEsjXtSgB0L2DDajNKfH" alt="Temperature Plot 2" style="max-width: 100%; height: auto; margin: 5px;" />
    </div>

    <button id="toggleButton" onclick="toggleLED()">Toggle LED</button>
    <p id="ledStatus">LED is OFF</p>
</div>

<style>
    .squeeze-aspect-ratio {
        width: auto;
        height: auto;
        display: block;
        max-width: 100%;
        aspect-ratio: 4 / 3;
        object-fit: fill; /* Squeeze the image to fit exactly in a 4:3 ratio */
    }

    /* Style for a 2x2 grid layout when in widescreen */
    .widescreen-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* 2 columns */
        grid-template-rows: repeat(2, 1fr); /* 2 rows */
        gap: 10px;
    }

    /* Adjust the flex layout for larger screens */
    .row-layout {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

    /* Column layout for small screens */
    .column-layout {
        display: flex;
        flex-direction: column;
    }

    /* Ensure the video fits the screen width in portrait mode */
    @media screen and (max-width: 768px) {
        #detectedVideo {
            width: 100%;
            height: auto;
        }
    }
</style>

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
    updateImage('camara1', 'https://drive.google.com/uc?export=view&id=10b5QfBtU1xx-qggz_UjoZn0sMfJmT9ZI');
    updateImage('camara2', 'https://drive.google.com/uc?export=view&id=19KHRWco6o_U3SB1Zsof58MvGyPbO6j__');
    updateImage('camara4', 'https://drive.google.com/uc?export=view&id=11yc6_LOWjh5L9pXkMV1-pV8QbidulJSQ');
    updateImage('camara5', 'https://drive.google.com/uc?export=view&id=1prHvQ2rbwoUfv5nf-ig4mAGznxFbePXq');
    updateTemperaturePlot('temperaturePlot1', 'https://drive.google.com/uc?export=view&id=1CUPkHJvfNaihCiTkOycwY8zlptEwW5-r');
    updateTemperaturePlot('temperaturePlot2', 'https://drive.google.com/uc?export=view&id=1KNUjtFYwoI3hzEsjXtSgB0L2DDajNKfH');
}, 15000); // 15 seconds interval

// Load the video once when the page loads
window.onload = function() {
    loadVideoOnce('detectedVideo', 'https://dl.dropboxusercontent.com/scl/fi/9d060e35st618r3n8bchs/latest_detection.mp4?rlkey=e4b13p40ryxw5aicwm9pnnd3b&st=ss4e4uf3&dl=1');
};

function arrangeImages() {
    const imageContainer = document.getElementById('image-container');
    const detectedImageContainer = document.getElementById('detected-image-container');
    const temperaturePlotsContainer = document.getElementById('temperature-plots-container');
    const images = imageContainer.getElementsByTagName('img');
    const detectedVideo = document.getElementById('detectedVideo');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (screenWidth < 768) {
        // Small screen (e.g., phones in portrait mode): Display images in a column
        imageContainer.classList.remove('widescreen-grid');
        imageContainer.classList.add('column-layout');
        detectedVideo.style.width = "100%"; // Ensure video fits the screen in portrait
        detectedVideo.style.height = "auto";
    } else if (screenWidth > screenHeight) {
        // Widescreen mode (e.g., tablets/PCs in landscape mode): Display images in a 2x2 grid
        imageContainer.classList.remove('column-layout');
        imageContainer.classList.add('widescreen-grid');
        detectedVideo.style.width = "50%"; // Adjust video width for widescreen
        detectedVideo.style.height = "auto";
    } else {
        // Larger screens in portrait or non-widescreen mode: Display images in a row
        imageContainer.classList.remove('widescreen-grid');
        imageContainer.classList.remove('column-layout');
        imageContainer.classList.add('row-layout');
        detectedVideo.style.width = "100%"; // Ensure video fits the screen in portrait
        detectedVideo.style.height = "auto";
    }
}

function handleOrientationChange() {
    arrangeImages();
}

window.addEventListener('resize', handleOrientationChange);

// Initial arrangement on page load
arrangeImages();
</script>
