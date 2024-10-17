---
layout: doughrock
title: "DOUGHROCK_PYDRIVE"
excerpt: "DOUGHROCK PYDRIVE"
image: /assets/images/Venus.PNG
---

<div class="center">
    <h1 style="text-align:center;">Welcome to Doughrock</h1>

    <div class="imgbox" id="image-container" style="display: flex; justify-content: center; flex-wrap: wrap;">
        <iframe class="camera-iframe" src="https://drive.google.com/file/d/10b5QfBtU1xx-qggz_UjoZn0sMfJmT9ZI/preview" width="640" height="480"></iframe>
        <iframe class="camera-iframe" src="https://drive.google.com/file/d/19KHRWco6o_U3SB1Zsof58MvGyPbO6j__/preview" width="640" height="480"></iframe>
        <iframe class="camera-iframe" src="https://drive.google.com/file/d/11yc6_LOWjh5L9pXkMV1-pV8QbidulJSQ/preview" width="640" height="480"></iframe>
        <iframe class="camera-iframe" src="https://drive.google.com/file/d/1prHvQ2rbwoUfv5nf-ig4mAGznxFbePXq/preview" width="640" height="480"></iframe>
    </div>

    <h2 style="text-align:center;">Temperature Plots:</h2>
    <div class="imgbox" id="temperature-plots-container" style="display: flex; justify-content: center; flex-wrap: wrap;">
        <iframe class="temperature-iframe" src="https://drive.google.com/file/d/1CUPkHJvfNaihCiTkOycwY8zlptEwW5-r/preview" width="640" height="360"></iframe>
        <iframe class="temperature-iframe" src="https://drive.google.com/file/d/1KNUjtFYwoI3hzEsjXtSgB0L2DDajNKfH/preview" width="640" height="360"></iframe>
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

    /* Common iframe styling */
    iframe {
        border: none;
    }

    /* Camera iframes with 4:3 ratio */
    .camera-iframe {
        width: 640px;
        height: 480px;
    }

    /* Temperature plot iframes with 16:9 ratio to avoid black bars */
    .temperature-iframe {
        width: 640px;
        height: 360px; /* Set to 16:9 ratio to avoid letterboxing */
    }

    /* 2x2 grid layout in widescreen */
    .widescreen-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* 2 columns */
        grid-template-rows: repeat(2, 1fr); /* 2 rows */
        gap: 10px;
    }

    /* Flex row layout for larger screens */
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
            width: 90%; /* Make the iframes take 90% of the screen width in portrait mode */
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
