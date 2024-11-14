---
layout: doughrock
title: "DOUGHROCK PYDRIVE2"
excerpt: "DOUGHROCK PYDRIVE2"
image: /assets/images/Venus.PNG
---

<div class="center">
    <h1 style="text-align:center;">Welcome to Doughrock</h1>

    <div class="imgbox" id="image-container" style="display: flex; justify-content: center; flex-wrap: wrap;">
        <iframe class="camera-iframe" id="camera1" src="https://drive.google.com/file/d/10b5QfBtU1xx-qggz_UjoZn0sMfJmT9ZI/preview" width="640" height="480"></iframe>
        <iframe class="camera-iframe" id="camera2" src="https://drive.google.com/file/d/19KHRWco6o_U3SB1Zsof58MvGyPbO6j__/preview" width="640" height="480"></iframe>
        <iframe class="camera-iframe" id="camera3" src="https://drive.google.com/file/d/11yc6_LOWjh5L9pXkMV1-pV8QbidulJSQ/preview" width="640" height="480"></iframe>
        <iframe class="camera-iframe" id="camera4" src="https://drive.google.com/file/d/1prHvQ2rbwoUfv5nf-ig4mAGznxFbePXq/preview" width="640" height="480"></iframe>
    </div>

    <h2 style="text-align:center;">Temperature Plots:</h2>
    <div class="imgbox" id="temperature-plots-container" style="display: flex; justify-content: center; flex-wrap: wrap;">
        <iframe class="temperature-iframe" id="temperature1" src="https://drive.google.com/file/d/1CUPkHJvfNaihCiTkOycwY8zlptEwW5-r/preview" width="640" height="360"></iframe>
        <iframe class="temperature-iframe" id="temperature2" src="https://drive.google.com/file/d/1KNUjtFYwoI3hzEsjXtSgB0L2DDajNKfH/preview" width="640" height="360"></iframe>
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
        max-width: 640px;
    }

    .camera-iframe {
        aspect-ratio: 4 / 3;
    }

    .temperature-iframe {
        aspect-ratio: 16 / 9;
    }

    .row-layout {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

    .column-layout {
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width: 768px) {
        iframe {
            width: 90%;
            height: auto;
        }

        .imgbox {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
</style>

<script>
var ledState = false;

function toggleLED() {
    var toggleButton = document.getElementById('toggleButton');
    var ledStatus = document.getElementById('ledStatus');

    if (ledState) {
        ledState = false;
        toggleButton.textContent = "Turn LED On";
        ledStatus.textContent = "LED is OFF";
    } else {
        ledState = true;
        toggleButton.textContent = "Turn LED Off";
        ledStatus.textContent = "LED is ON";
    }
}

// Perform a hard page refresh every 15 seconds
window.onload = function() {
    setInterval(function() {
        location.reload();
    }, 15000);
};
</script>
