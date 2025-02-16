---
layout: doughrock
title: "DOUGHROCK PYDRIVE2"
excerpt: "DOUGHROCK PYDRIVE2"
image: /assets/images/Venus.PNG
---

<div class="center">
    <h1 style="text-align:center;">Welcome to Doughrock</h1>

    <div class="imgbox" id="image-container" style="display: flex; justify-content: center; flex-wrap: wrap;">
        <iframe class="camera-iframe" id="camera1" src="https://drive.google.com/file/d/19KHRWco6o_U3SB1Zsof58MvGyPbO6j__/preview" width="640" height="480"></iframe>
        <iframe class="camera-iframe" id="camera2" src="https://drive.google.com/file/d/1vrr26I23p4XUdAlN_2tnevs4VYE7PIoI/preview" width="640" height="480"></iframe>
        <iframe class="camera-iframe" id="camera3" src="https://drive.google.com/file/d/15NHAZMdz2H9QrQ5h3VJiqcF_4K_rvC1C/preview" width="640" height="480"></iframe>
    </div>
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

    .imgbox {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
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
function refreshImages() {
    let timestamp = new Date().getTime(); // Unique timestamp to bypass cache
    document.getElementById("camera1").src = "https://drive.google.com/file/d/19KHRWco6o_U3SB1Zsof58MvGyPbO6j__/preview?nocache=" + timestamp;
    document.getElementById("camera2").src = "https://drive.google.com/file/d/1vrr26I23p4XUdAlN_2tnevs4VYE7PIoI/preview?nocache=" + timestamp;
    document.getElementById("camera3").src = "https://drive.google.com/file/d/15NHAZMdz2H9QrQ5h3VJiqcF_4K_rvC1C/preview?nocache=" + timestamp;
}

// Refresh images every 5 seconds
setInterval(refreshImages, 5000);
</script>
