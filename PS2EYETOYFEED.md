---
layout: post
title:  "DOUGHROCK2 "
date:   2020-05-03 21:15:05 +0000
excerpt: "DOUGHROCK2"
image: /assets/images/Venus.PNG
---

<div class="center">
  <div class="imgbox">
    <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZuwnTXvAUq6y4jhD88v8UFENrwXzaUgmrmzi6jAoqO__SSfb8gS_uhIgl5vm0AHOK8EWxhhudjFgFAmPwt0NvVTHIF=w958-h934" alt="Loading..." name="camara" width="100%" height="100%" border="0" id="camara">
  </div>
</div>

<script>
function ChangeMedia() {
    var img = document.getElementById('camara');
    var d = new Date();
    var t = d.getTime();
    img.onerror = function() {
        // Retry loading the image after 2 seconds if there's an error
        setTimeout(function() {
            img.src = "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZuwnTXvAUq6y4jhD88v8UFENrwXzaUgmrmzi6jAoqO__SSfb8gS_uhIgl5vm0AHOK8EWxhhudjFgFAmPwt0NvVTHIF=w958-h934&t=" + t;
        }, 2000);
    };
    img.src = "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZuwnTXvAUq6y4jhD88v8UFENrwXzaUgmrmzi6jAoqO__SSfb8gS_uhIgl5vm0AHOK8EWxhhudjFgFAmPwt0NvVTHIF=w958-h934&t=" + t;
}
var reloadcam = setInterval(ChangeMedia, 2000);
</script>
