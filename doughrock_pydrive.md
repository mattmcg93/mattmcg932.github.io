---
layout: doughrock
title: "DOUGHROCK PYDRIVE"
excerpt: "DOUGHROCK PYDRIVE"
image: /assets/images/Venus.PNG
---

<div class="center">
    <h1 style="text-align:center;">Welcome to Doughrock</h1>

    <div class="imgbox" id="image-container" style="display: flex; justify-content: center; flex-wrap: wrap;">
        <iframe class="camera-iframe" id="camera1" width="640" height="480"></iframe>
        <iframe class="camera-iframe" id="camera2" width="640" height="480"></iframe>
        <iframe class="camera-iframe" id="camera3" width="640" height="480"></iframe>
        <iframe class="camera-iframe" id="camera4" width="640" height="480"></iframe>


    </div>

    <h2 style="text-align:center;">Temperature Plots:</h2>
    <div class="imgbox" id="temperature-plots-container" style="display: flex; justify-content: center; flex-wrap: wrap;">
        <iframe class="temperature-iframe" id="temperature1" width="640" height="360"></iframe>
        <iframe class="temperature-iframe" id="temperature2" width="640" height="360"></iframe>
    </div>

    <button id="toggleButton" onclick="toggleLED()">Toggle LED</button>
    <p id="ledStatus">LED is OFF</p>
</div>

<style>
    /* Common iframe styling */
    iframe {
        border: none;
        width: 100%;
        height: auto;
        max-width: 640px; /* Prevents exceeding the original dimensions */
    }

    /* Camera iframes with a 4:3 ratio */
    .camera-iframe {
        aspect-ratio: 4 / 3; /* Maintains 4:3 aspect ratio */
    }

    /* Temperature plot iframes with a 16:9 ratio */
    .temperature-iframe {
        aspect-ratio: 16 / 9; /* Maintains 16:9 aspect ratio */
    }

    /* Flex layout for larger screens */
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

    /* Portrait mode adjustments for smaller screens */
    @media screen and (max-width: 768px) {
        iframe {
            width: 90%; /* Make iframes take up 90% of the screen width */
            height: auto; /* Keep height proportional to width */
        }

        .imgbox {
            display: flex;
            flex-direction: column;
            align-items: center; /* Center the iframes on smaller screens */
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

function appendRandomParamToUrl(url) {
    const randomParam = Math.random().toString(36).substring(7); // Generate a random string
    return `${url}?v=${randomParam}`; // Append the random string to prevent caching
}

function updateIframeSources() {
    // Camera image iframes
    document.getElementById('camera1').src = appendRandomParamToUrl('https://drive.google.com/file/d/10b5QfBtU1xx-qggz_UjoZn0sMfJmT9ZI/preview');
    document.getElementById('camera2').src = appendRandomParamToUrl('https://drive.google.com/file/d/19KHRWco6o_U3SB1Zsof58MvGyPbO6j__/preview');
    document.getElementById('camera3').src = appendRandomParamToUrl('https://drive.google.com/file/d/11yc6_LOWjh5L9pXkMV1-pV8QbidulJSQ/preview');
    document.getElementById('camera4').src = appendRandomParamToUrl('https://drive.google.com/file/d/1prHvQ2rbwoUfv5nf-ig4mAGznxFbePXq/preview');

    // Temperature plot iframes
    document.getElementById('temperature1').src = appendRandomParamToUrl('https://drive.google.com/file/d/1CUPkHJvfNaihCiTkOycwY8zlptEwW5-r/preview');
    document.getElementById('temperature2').src = appendRandomParamToUrl('https://drive.google.com/file/d/1KNUjtFYwoI3hzEsjXtSgB0L2DDajNKfH/preview');


}

// This function updates the image sources when the page loads
window.onload = function() {
    updateIframeSources();
    arrangeImages();
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

// Event listener to handle screen orientation changes
window.addEventListener('resize', handleOrientationChange);
</script>
