---
layout: post
title: "DOUGHROCK1"
date: 2020-05-03 21:15:05 +0000
excerpt: "DOUGHROCK1"
image: /assets/images/Venus.PNG
---

<div id="imageContainer"></div>

<script>
function loadImage() {
    var imageUrl = "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZuwnTXvAUq6y4jhD88v8UFENrwXzaUgmrmzi6jAoqO__SSfb8gS_uhIgl5vm0AHOK8EWxhhudjFgFAmPwt0NvVTHIF=w958-h934";
    var timestamp = new Date().getTime();
    var imageElement = document.createElement('img');
    imageElement.src = imageUrl + "&t=" + timestamp;
    imageElement.width = "100%";
    imageElement.height = "100%";
    document.getElementById('imageContainer').innerHTML = '';
    document.getElementById('imageContainer').appendChild(imageElement);
    setTimeout(loadImage, 1000); // Refresh every second
}

loadImage();
</script>
