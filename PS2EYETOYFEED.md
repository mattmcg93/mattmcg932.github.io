---
layout: post
title: "DOUGHROCK2"
date: 2020-05-03 21:15:05 +0000
excerpt: "DOUGHROCK"
image: /assets/images/Venus.PNG
---

<iframe src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZuwnTXvAUq6y4jhD88v8UFENrwXzaUgmrmzi6jAoqO__SSfb8gS_uhIgl5vm0AHOK8EWxhhudjFgFAmPwt0NvVTHIF=w958-h934" width="100%" height="100%"></iframe>

<script>
function updateFrame() {
    var frame = document.querySelector('iframe');
    var d = new Date();
    var t = d.getTime();
    frame.src = "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZuwnTXvAUq6y4jhD88v8UFENrwXzaUgmrmzi6jAoqO__SSfb8gS_uhIgl5vm0AHOK8EWxhhudjFgFAmPwt0NvVTHIF=w958-h934&t=" + t;
    setTimeout(updateFrame, 1000); // Refresh every second
}
updateFrame();
</script>
