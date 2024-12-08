---
layout: doughrock
title: "DOUGHROCK FLIP"
excerpt: "DOUGHROCK FLIP2"
image: /assets/images/Venus.PNG
---

<div class="center" style="background-color: black; padding: 0; margin: 0; height: 100vh; width: 100vw; display: flex;">
    <div id="img1-container" 
         style="width: 50vw; height: 100vh; background-size: 100% 100%; background-repeat: no-repeat;">
    </div>
    <div id="img2-container" 
         style="width: 50vw; height: 100vh; background-size: 100% 100%; background-repeat: no-repeat;">
    </div>
</div>

<script>
let imageUrls = [
    'https://dl.dropbox.com/scl/fi/zhkwrx1kt7kc5s0ypduhx/capture1.jpg?rlkey=uigscdp62h8o0zkh5jr6m9hdv&st=s60u33u0&dl=1',
    'https://dl.dropbox.com/scl/fi/9wz46ajek7xtyxa5rtpag/captureEthernet.jpg?rlkey=vlsx4cdu5zd5ywdpqo2gyoq1j&st=giw1qvyp&dl=1'
];

function updateBackgroundImage(containerId, imageUrl) {
    var timestamp = new Date().getTime();
    // Append timestamp to prevent caching
    document.getElementById(containerId).style.backgroundImage = `url('${imageUrl}&t=${timestamp}')`;
}

// Initial load
updateBackgroundImage('img1-container', imageUrls[0]);
updateBackgroundImage('img2-container', imageUrls[1]);

// Update both images every 10 seconds
setInterval(function() {
    updateBackgroundImage('img1-container', imageUrls[0]);
    updateBackgroundImage('img2-container', imageUrls[1]);
}, 10000);
</script>
