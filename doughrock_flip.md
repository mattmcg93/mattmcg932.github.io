<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Slideshow</title>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            overflow: hidden;
        }

        .fullscreen-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;  /* Stretch to fill width */
            height: 100%; /* Stretch to fill height */
            object-fit: fill; /* Disregard aspect ratio */
        }
    </style>
</head>
<body>
    <iframe id="slideshow" class="fullscreen-image"></iframe>

    <script>
        // Array of Google Drive preview URLs
        const imageUrls = [
            'https://drive.google.com/file/d/10b5QfBtU1xx-qggz_UjoZn0sMfJmT9ZI/preview',
            'https://drive.google.com/file/d/19KHRWco6o_U3SB1Zsof58MvGyPbO6j__/preview',
            'https://drive.google.com/file/d/11yc6_LOWjh5L9pXkMV1-pV8QbidulJSQ/preview'
        ];

        let currentImageIndex = 0;

        function appendRandomParamToUrl(url) {
            const randomParam = Date.now() + Math.random().toString(36).substring(7); // Combine timestamp and random string
            return `${url}?v=${randomParam}`; // Append cache-busting query parameter
        }

        function reloadIframe(id, url) {
            const iframe = document.getElementById(id);
            const newIframe = iframe.cloneNode();
            newIframe.src = appendRandomParamToUrl(url);
            iframe.parentNode.replaceChild(newIframe, iframe); // Dynamically replace iframe
        }

        function showNextImage() {
            const url = imageUrls[currentImageIndex];
            reloadIframe('slideshow', url); // Replace iframe with the next image

            // Move to the next image, loop back to the first if at the end
            currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
        }

        // Start the slideshow
        window.onload = function() {
            showNextImage(); // Show the first image
            setInterval(showNextImage, 15000); // Change image every 15 seconds
        };
    </script>
</body>
</html>
