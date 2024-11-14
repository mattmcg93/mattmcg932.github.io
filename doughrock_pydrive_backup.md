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

function appendRandomParamToUrl(url) {
    const randomParam = Date.now() + Math.random().toString(36).substring(7);
    return `${url}?v=${randomParam}`;
}

function updateIframeSources() {
    document.getElementById('camera1').src = appendRandomParamToUrl('https://drive.google.com/file/d/10b5QfBtU1xx-qggz_UjoZn0sMfJmT9ZI/preview');
    document.getElementById('camera2').src = appendRandomParamToUrl('https://drive.google.com/file/d/19KHRWco6o_U3SB1Zsof58MvGyPbO6j__/preview');
    document.getElementById('camera3').src = appendRandomParamToUrl('https://drive.google.com/file/d/11yc6_LOWjh5L9pXkMV1-pV8QbidulJSQ/preview');
    document.getElementById('camera4').src = appendRandomParamToUrl('https://drive.google.com/file/d/1prHvQ2rbwoUfv5nf-ig4mAGznxFbePXq/preview');
    document.getElementById('temperature1').src = appendRandomParamToUrl('https://drive.google.com/file/d/1CUPkHJvfNaihCiTkOycwY8zlptEwW5-r/preview');
    document.getElementById('temperature2').src = appendRandomParamToUrl('https://drive.google.com/file/d/1KNUjtFYwoI3hzEsjXtSgB0L2DDajNKfH/preview');
}

// Refresh every 10 seconds to enforce image updates
window.onload = function() {
    updateIframeSources();
    setInterval(updateIframeSources, 10000);
};
</script>
