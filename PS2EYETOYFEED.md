---
layout: post
title:  "DOUGHROCK"
date:   2020-05-03 21:15:05 +0000
excerpt: "DOUGHROCK"
image: /assets/images/Venus.PNG
---

<div class="center">
    <div class="imgbox">
        <img id="camara" src="/assets/images/Venus.PNG" alt="Image" width="100%" height="100%" />
    </div>
</div>

<script>
function updateImage() {
    var imgElement = document.getElementById('camara');
    var timestamp = new Date().getTime(); // Add timestamp to prevent caching
    imgElement.src = "/assets/images/Venus.PNG?t=" + timestamp;
}

// Update the image every second
setInterval(updateImage, 1000);
</script>
