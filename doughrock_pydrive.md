---
layout: doughrock
title: "DOUGHROCK PYDRIVE"
excerpt: "DOUGHROCK PYDRIVE"
image: /assets/images/Venus.PNG
---

<div class="center">
    <h1 style="text-align:center;">Welcome to Doughrock</h1>

    <div class="imgbox" id="image-container" style="display: flex; justify-content: center; flex-wrap: wrap;">
        <img id="camara1" alt="Image 1" class="squeeze-aspect-ratio" />
        <img id="camara2" alt="Image 2" class="squeeze-aspect-ratio" />
        <img id="camara4" alt="Image 4" class="squeeze-aspect-ratio" />
        <img id="camara5" alt="Image 5" class="squeeze-aspect-ratio" />
    </div>

    <h2 style="text-align:center;">Temperature Plots:</h2>
    <div class="imgbox" id="temperature-plots-container" style="display: flex; justify-content: center; flex-wrap: wrap;">
        <img id="temperaturePlot1" alt="Temperature Plot 1" style="max-width: 100%; height: auto; margin: 5px;" />
        <img id="temperaturePlot2" alt="Temperature Plot 2" style="max-width: 100%; height: auto; margin: 5px;" />
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

// Function to fetch image and convert to base64
function fetchImageAsBase64(imageId, driveUrl) {
    fetch(driveUrl)
        .then(response => response.blob())
        .then(blob => {
            const reader = new FileReader();
            reader.onloadend = function() {
                document.getElementById(imageId).src = reader.result; // Set base64 as image source
            };
            reader.readAsDataURL(blob); // Convert blob to base64
        })
        .catch(error => {
            console.error('Error fetching image:', error);
        });
}

// Fetch images from Google Drive and convert to base64
window.onload = function() {
    fetchImageAsBase64('camara1', 'https://drive.google.com/uc?export=view&id=10b5QfBtU1xx-qggz_UjoZn0sMfJmT9ZI');
    fetchImageAsBase64('camara2', 'https://drive.google.com/uc?export=view&id=19KHRWco6o_U3SB1Zsof58MvGyPbO6j__');
    fetchImageAsBase64('camara4', 'https://drive.google.com/uc?export=view&id=11yc6_LOWjh5L9pXkMV1-pV8QbidulJSQ');
    fetchImageAsBase64('camara5', 'https://drive.google.com/uc?export=view&id=1prHvQ2rbwoUfv5nf-ig4mAGznxFbePXq');
    fetchImageAsBase64('temperaturePlot1', 'https://drive.google.com/uc?export=view&id=1CUPkHJvfNaihCiTkOycwY8zlptEwW5-r');
    fetchImageAsBase64('temperaturePlot2', 'https://drive.google.com/uc?export=view&id=1KNUjtFYwoI3hzEsjXtSgB0L2DDajNKfH');
}

function arrangeImages() {
    const imageContainer = document.getElementById('image-container');
    const temperaturePlotsContainer = document.getElementById('temperature-plots-container');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (screenWidth < 768) {
        // Small screen (e.g., phones in portrait mode): Display images in a column
        imageContainer.classList.remove('widescreen-grid');
        imageContainer.classList.add('column-layout');
    } else if (screenWidth > screenHeight) {
        // Widescreen mode (e.g., tablets/PCs in landscape mode): Display images in a 2x2 grid
        imageContainer.classList.remove('column-layout');
        imageContainer.classList.add('widescreen-grid');
    } else {
        // Larger screens in portrait or non-widescreen mode: Display images in a row
        imageContainer.classList.remove('widescreen-grid');
        imageContainer.classList.remove('column-layout');
        imageContainer.classList.add('row-layout');
    }
}

function handleOrientationChange() {
    arrangeImages();
}

window.addEventListener('resize', handleOrientationChange);

// Initial arrangement on page load
arrangeImages();
</script>
