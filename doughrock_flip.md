---
layout: doughrock
title:  "DOUGHROCK FLIP2"
excerpt: "DOUGHROCK FLIP2"
image: /assets/images/Venus.PNG
---

<div class="center" style="background-color: black; padding: 0; margin: 0; height: 100vh; width: 100vw;">
    <div class="imgbox" id="image-container" style="display: flex; flex-direction: row; align-items: center; justify-content: center; height: 100%; width: 100%;">
        <img id="camara2" src="https://dl.dropbox.com/scl/fi/l8xbeyhn7x0tyru79s8p1/captureEthernet.jpg?rlkey=sbs9kzxctced7zgwki4ylqgkc&st=t6drd9pr&dl=1" alt="Image 2" style="width: 50vw; height: 100vh; object-fit: fill; margin: 0;" />
        <img id="camara4" src="https://dl.dropbox.com/scl/fi/xh5ml5to3afne3zyhsnbb/capture3.jpg?rlkey=0d4f26lwyyvx4amyngsvy37d9&st=kla64jwv&dl=1" alt="Image 4" style="width: 50vw; height: 100vh; object-fit: fill; margin: 0;" />
    </div>
</div>

<script>
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

// Update each camera image every 15 seconds
setInterval(function() {
    updateImage('camara2', 'https://dl.dropbox.com/scl/fi/l8xbeyhn7x0tyru79s8p1/captureEthernet.jpg?rlkey=sbs9kzxctced7zgwki4ylqgkc&st=t6drd9pr&dl=1');
    updateImage('camara4', 'https://dl.dropbox.com/scl/fi/xh5ml5to3afne3zyhsnbb/capture3.jpg?rlkey=0d4f26lwyyvx4amyngsvy37d9&st=kla64jwv&dl=1');
}, 4500);

function arrangeImages() {
    const imageContainer = document.getElementById('image-container');
    const images = imageContainer.getElementsByTagName('img');
    
    // Display images horizontally with each image taking 50% of the width and 100% of the height
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'block';
        images[i].style.width = '50vw';   // 50% of the viewport width
        images[i].style.height = '100vh'; // 100% of the viewport height
        images[i].style.objectFit = 'fill';  // Squash/stretch the images to fit the container
    }
}

function handleOrientationChange() {
    arrangeImages();
}

window.addEventListener('resize', handleOrientationChange);

// Initial arrangement on page load
arrangeImages();
</script>
