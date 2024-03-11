---
layout: post
title:  "DOUGHROCK CAMS"
excerpt: "DOUGHROCK CAMS"
image: /assets/images/Venus.PNG
---

<div class="center">
    <div class="imgbox">
        <img id="camara1" src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihakg0YlddFoRn6ZoOuDzYQOlMdfMjJSyXeGY6tbSeYYwK7AdjdOF9rWQcGSy0MeHfZ1m2qvtaTctGD8PoCWs8c4424c=w958-h934?_=" alt="Image 1" width="100%" />
        <img id="camara2" src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYy-RT53rm-IKxNyGWpYngUCXknuassUelNvl1ZVoufbPfmsJCX6k5m94xYoVp69J6gAjxnbFUsh1KzgWDr-1QWiLZg=w958-h934?_=" alt="Image 2" width="100%" />
    </div>
</div>

<script>
function updateImages() {
    var imgElement1 = document.getElementById('camara1');
    var imgElement2 = document.getElementById('camara2');
    var timestamp = new Date().getTime(); // Add timestamp to prevent caching
    imgElement1.src = "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihakg0YlddFoRn6ZoOuDzYQOlMdfMjJSyXeGY6tbSeYYwK7AdjdOF9rWQcGSy0MeHfZ1m2qvtaTctGD8PoCWs8c4424c=w958-h934?_=" + timestamp;
    imgElement2.src = "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYy-RT53rm-IKxNyGWpYngUCXknuassUelNvl1ZVoufbPfmsJCX6k5m94xYoVp69J6gAjxnbFUsh1KzgWDr-1QWiLZg=w958-h934?_=" + timestamp;
}

// Update the images every second
setInterval(updateImages, 1000);
</script>
