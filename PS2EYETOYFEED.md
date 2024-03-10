---
layout: post
title: "DOUGHROCK1"
date: 2020-05-03 21:15:05 +0000
excerpt: "DOUGHROCK"
image: /assets/images/Venus.PNG
---

<script>
function updateFrame() {
    var d = new Date();
    var t = d.getTime();
    var camara = document.getElementById('camara');
    camara.src = "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZuwnTXvAUq6y4jhD88v8UFENrwXzaUgmrmzi6jAoqO__SSfb8gS_uhIgl5vm0AHOK8EWxhhudjFgFAmPwt0NvVTHIF=w958-h934&t=" + t;
    camara.onload = function() {
        setTimeout(updateFrame, 2000); // Refresh every 2 seconds
    };
}
updateFrame();
</script>

<div class="center">
    <div class="imgbox">
        <img src="" alt="Loading..." name="camara" width="100%" height="100%" border="0" id="camara" />
    </div>
</div>
