---
layout: doughrock
title: "DOUGHROCK PYDRIVE"
excerpt: "DOUGHROCK PYDRIVE"
image: /assets/images/Venus.PNG
---

<div class="center">
    <h1 style="text-align:center;">Welcome to Doughrock</h1>

    <div class="imgbox" id="image-container" style="display: flex; justify-content: center; flex-wrap: wrap;">
        <iframe class="camera-iframe" src="https://drive.google.com/file/d/10b5QfBtU1xx-qggz_UjoZn0sMfJmT9ZI/preview"></iframe>
        <iframe class="camera-iframe" src="https://drive.google.com/file/d/19KHRWco6o_U3SB1Zsof58MvGyPbO6j__/preview"></iframe>
        <iframe class="camera-iframe" src="https://drive.google.com/file/d/11yc6_LOWjh5L9pXkMV1-pV8QbidulJSQ/preview"></iframe>
        <iframe class="camera-iframe" src="https://drive.google.com/file/d/1prHvQ2rbwoUfv5nf-ig4mAGznxFbePXq/preview"></iframe>
    </div>

    <h2 style="text-align:center;">Temperature Plots:</h2>
    <div class="imgbox" id="temperature-plots-container" style="display: flex; justify-content: center; flex-wrap: wrap;">
        <iframe class="temperature-iframe" src="https://drive.google.com/file/d/1CUPkHJvfNaihCiTkOycwY8zlptEwW5-r/preview"></iframe>
        <iframe class="temperature-iframe" src="https://drive.google.com/file/d/1KNUjtFYwoI3hzEsjXtSgB0L2DDajNKfH/preview"></iframe>
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
