---
layout: doughrock
title: "DOUGHROCK PYDRIVE"
excerpt: "DOUGHROCK PYDRIVE"
image: /assets/images/Venus.PNG
---

<div class="center">
    <h1 style="text-align:center;">Welcome to Doughrock</h1>

    <div class="imgbox" id="image-container" style="display: flex; justify-content: center; flex-wrap: wrap;">
        <img class="camera-img" id="camera1" src="https://drive.google.com/uc?id=10b5QfBtU1xx-qggz_UjoZn0sMfJmT9ZI" width="640" height="480" />
        <img class="camera-img" id="camera2" src="https://drive.google.com/uc?id=19KHRWco6o_U3SB1Zsof58MvGyPbO6j__" width="640" height="480" />
        <img class="camera-img" id="camera3" src="https://drive.google.com/uc?id=11yc6_LOWjh5L9pXkMV1-pV8QbidulJSQ" width="640" height="480" />
        <img class="camera-img" id="camera4" src="https://drive.google.com/uc?id=1prHvQ2rbwoUfv5nf-ig4mAGznxFbePXq" width="640" height="480" />
    </div>

    <h2 style="text-align:center;">Temperature Plots:</h2>
    <div class="imgbox" id="temperature-plots-container" style="display: flex; justify-content: center; flex-wrap: wrap;">
        <img class="temperature-img" id="temperature1" src="https://drive.google.com/uc?id=1CUPkHJvfNaihCiTkOycwY8zlptEwW5-r" width="640" height="360" />
        <img class="temperature-img" id="temperature2" src="https://drive.google.com/uc?id=1KNUjtFYwoI3hzEsjXtSgB0L2DDajNKfH" width="640" height="360" />
    </div>

    <button id="toggleButton" onclick="toggleLED()">Toggle LED</button>
    <p id="ledStatus">LED is OFF</p>
</div>

<style>
    img {
        border: none;
        width: 100%;
        height: auto;
        max-width: 640px;
    }

    .camera-img {
        aspect-ratio: 4 / 3;
    }

    .temperature-img {
        aspect-ratio: 16 / 9;
    }

    @media screen and (max-width: 768px) {
        img {
            width: 90%;
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
        window.location.href = window.location.href.split('?')[0] + '?hardrefresh=' + Date.now();
    }, 15000);
};
</script>
