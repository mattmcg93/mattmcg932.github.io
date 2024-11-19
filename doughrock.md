---
layout: doughrock
title: "DOUGHROCK"
excerpt: "DOUGHROCK"
image: /assets/images/Venus.PNG
---

<div class="center">
    <h1 style="text-align:center;">Welcome to Doughrock</h1>

    <div class="imgbox" id="image-container" style="display: flex; justify-content: center; flex-wrap: wrap;">
        <img id="camara1" src="https://dl.dropbox.com/scl/fi/zhkwrx1kt7kc5s0ypduhx/capture1.jpg?rlkey=uigscdp62h8o0zkh5jr6m9hdv&st=s60u33u0&dl=1" alt="Image 1" class="squeeze-aspect-ratio" />
        <img id="camara2" src="https://dl.dropbox.com/scl/fi/9wz46ajek7xtyxa5rtpag/captureEthernet.jpg?rlkey=vlsx4cdu5zd5ywdpqo2gyoq1j&st=giw1qvyp&dl=1" alt="Image 2" class="squeeze-aspect-ratio" />
        <img id="camara4" src="https://dl.dropbox.com/scl/fi/xh5ml5to3afne3zyhsnbb/capture3.jpg?rlkey=0d4f26lwyyvx4amyngsvy37d9&st=kla64jwv&dl=1" alt="Image 4" class="squeeze-aspect-ratio" />
        <img id="camara5" src="https://dl.dropbox.com/scl/fi/9ana9eoxf3yob6kopqix6/capture4.jpg?rlkey=joehtgx3n67v48vd525zz9vrn&st=0h5hfxhp&dl=1" alt="Image 5" class="squeeze-aspect-ratio" />
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
        <img id="temperaturePlot1" src="https://dl.dropbox.com/scl/fi/mvh3qpj4ika2b5qr6mr3i/raspi1temp_temperature_month_plot.png?rlkey=639b5zabw1tlgd0n6llqpwmkg&st=4w0tnrdo&dl=1" alt="Temperature Plot 1" style="max-width: 100%; height: auto; margin: 5px;" />
        <img id="temperaturePlot2" src="https://dl.dropbox.com/scl/fi/tx5y6m9r4kq2c4qkdzw1f/raspi1temp_temperature_week_plot.png?rlkey=4sbnzj8qm4nkclzg5pf4oxltu&st=1u6h0to4&dl=1" alt="Temperature Plot 2" style="max-width: 100%; height: auto; margin: 5px;" />
        <img id="humidityPlot1" src="https://dl.dropbox.com/scl/fi/va98fqt6xa1wigf9hqkin/raspi1humid_temperature_month_plot.png?rlkey=lgghdrj348fr4t0o4av20wlsp&st=hd9vslso&dl=1" alt="Temperature Plot 1" style="max-width: 100%; height: auto; margin: 5px;" />
        <img id="humidityPlot2" src="https://dl.dropbox.com/scl/fi/yt28xmb1r4gib0ef92qys/raspi1humid_temperature_week_plot.png?rlkey=14c2qpdqmeiuqg1015i50imci&st=d2vlmu50&dl=1" alt="Temperature Plot 2" style="max-width: 100%; height: auto; margin: 5px;" />
        
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
    updateImage('camara1', 'https://dl.dropbox.com/scl/fi/zhkwrx1kt7kc5s0ypduhx/capture1.jpg?rlkey=uigscdp62h8o0zkh5jr6m9hdv&st=s60u33u0&dl=1');
    updateImage('camara2', 'https://dl.dropbox.com/scl/fi/9wz46ajek7xtyxa5rtpag/captureEthernet.jpg?rlkey=vlsx4cdu5zd5ywdpqo2gyoq1j&st=giw1qvyp&dl=1');
    updateImage('camara4', 'https://dl.dropbox.com/scl/fi/xh5ml5to3afne3zyhsnbb/capture3.jpg?rlkey=0d4f26lwyyvx4amyngsvy37d9&st=kla64jwv&dl=1');
    updateImage('camara5', 'https://dl.dropbox.com/scl/fi/9ana9eoxf3yob6kopqix6/capture4.jpg?rlkey=joehtgx3n67v48vd525zz9vrn&st=0h5hfxhp&dl=1');
    updateTemperaturePlot('temperaturePlot1', 'https://dl.dropbox.com/scl/fi/mvh3qpj4ika2b5qr6mr3i/raspi1temp_temperature_month_plot.png?rlkey=639b5zabw1tlgd0n6llqpwmkg&st=4w0tnrdo&dl=1');
    updateTemperaturePlot('temperaturePlot2', 'https://dl.dropbox.com/scl/fi/tx5y6m9r4kq2c4qkdzw1f/raspi1temp_temperature_week_plot.png?rlkey=4sbnzj8qm4nkclzg5pf4oxltu&st=1u6h0to4&dl=1');
    updateTemperaturePlot('humidityPlot1', 'https://dl.dropbox.com/scl/fi/va98fqt6xa1wigf9hqkin/raspi1humid_temperature_month_plot.png?rlkey=lgghdrj348fr4t0o4av20wlsp&st=hd9vslso&dl=1');
    updateTemperaturePlot('humidityPlot2', 'https://dl.dropbox.com/scl/fi/yt28xmb1r4gib0ef92qys/raspi1humid_temperature_week_plot.png?rlkey=14c2qpdqmeiuqg1015i50imci&st=d2vlmu50&dl=1');
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
