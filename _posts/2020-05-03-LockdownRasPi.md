---
layout: post
title:  "Pi Projects During Lockdown"
date:   2020-05-03 21:15:05 +0000
excerpt: "During the current lockdown I'm working on a few side projects to try and learn a little bit about robotics and running machine learning algorithms"
image: /assets/images/RasPiCam.png
---


During the current lockdown I'm working on a few side projects to try and learn a little bit about robotics and running machine learning algorithms using limited resources (an old Raspberry Pi). I thought I'd try and use what I have lying around the house - a slightly old motorised telescope, remote control car and an old PlayStation 2 EyeToy Camera. <b>Code and more details coming soon...</b>

<div class="imgbox">
    <img class="center-fit" src='https://drive.google.com/uc?id=1g7hKykFXuAQ5-Or2tYNEsvyTTqy6461Z&export=download'>    
</div>

So far I'm running these on a Raspberry Pi 1st Edition (which are all in various stages of completion) during the lockdown: 

<b> 1) Controlling my telescope's motorised mount using Python with a webcam to track objects by using the webcam video to guide the motors.</b>
<div class="center">
<img src="/assets/images/Capture.PNG" alt="drawing" width="340"/>
</div>
The above image shows the current version of my code successfully tracking a crescent Venus. This is different from conventional tracking methods which track "blind", where the mount moves without knowing what the telescope can actually see, meaning that after a while the object being tracked often drifts out of view. The conventional tracking methods also require a slightly complex and unreliable configuration method where stars are used to "align" the telescope and help it figure out it's orientation. This method has always failed a lot for me, and proved more hassle than it is worth.

<b>2) Running TensorFlow object recognition on my Raspberry Pi 1st Edition (so basically a slow antique) with a PlayStation 2 EyeToy Camera.</b> This is quite self explanatory, and easy to do on a Raspberry Pi 4 but I want to see what I can get out of my existing equipment.

<b>3) Creating an autonomous Raspberry Pi Wi-Fi remote control car which will (hopefully) drive itself.</b> This largely fits in with 2) from above. I need to first wire up the remote control car to be controlled over Wi-Fi using the Pi, then look at attaching a camera in order to use the camera to attempt to drive the car itself.














   












