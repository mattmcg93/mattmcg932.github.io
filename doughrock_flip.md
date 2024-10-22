<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ page.title }}</title>

    <style>
        /* Ensure the image takes up the full screen */
        body, html {
            margin: 0;
            padding: 0;
            overflow: hidden;
            height: 100%;
            width: 100%;
        }

        #image-container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #image-container img {
            max-width: 100%;
            max-height: 100%;
        }
    </style>
</head>
<body>
    <div id="image-container">
        <img src="https://dl.dropbox.com/scl/fi/5f09j1aix76rbw5ci2nqh/capture1.jpg?rlkey=grfyzmz93k1m1yl7owtx9kcgc&st=ec613gi4&dl=1" alt="Image 1">
        <img src="https://dl.dropbox.com/scl/fi/5f09j1aix76rbw5ci2nqh/capture2.jpg?rlkey=grfyzmz93k1m1yl7owtx9kcgc&st=ec613gi4&dl=1" alt="Image 2" style="display: none;">
        <img src="https://dl.dropbox.com/scl/fi/5f09j1aix76rbw5ci2nqh/capture3.jpg?rlkey=grfyzmz93k1m1yl7owtx9kcgc&st=ec613gi4&dl=1" alt="Image 3" style="display: none;">
    </div>

    <script>
        const images = document.querySelectorAll('#image-container img');
        let currentImageIndex = 0;

        function showNextImage() {
            // Hide the current image
            images[currentImageIndex].style.display = 'none';
            
            // Move to the next image index
            currentImageIndex = (currentImageIndex + 1) % images.length;
            
            // Show the next image
            images[currentImageIndex].style.display = 'block';
        }

        // Show the next image every 10 seconds (10000 milliseconds)
        setInterval(showNextImage, 10000);

        // Ensure the first image is visible when the page loads
        window.addEventListener('load', () => {
            images[0].style.display = 'block';
        });
    </script>
</body>
</html>
