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
            background: black;
        }

        iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
            object-fit: cover;
        }
    </style>
</head>
<body>
    <iframe id="slideshow"></iframe>

    <script>
        // Array of Google Drive preview URLs
        const imageUrls = [
            'https://drive.google.com/file/d/10b5QfBtU1xx-qggz_UjoZn0sMfJmT9ZI/preview',
            'https://drive.google.com/file/d/19KHRWco6o_U3SB1Zsof58MvGyPbO6j__/preview',
            'https://drive.google.com/file/d/11yc6_LOWjh5L9pXkMV1-pV8QbidulJSQ/preview'
        ];

        let currentIndex = 0;

        function appendCacheBuster(url) {
            // Add a unique timestamp parameter to prevent caching
            return `${url}?cb=${Date.now()}`;
        }

        function showNextImage() {
            const iframe = document.getElementById('slideshow');

            // Set iframe source to the next image URL with cache-busting parameter
            iframe.src = appendCacheBuster(imageUrls[currentIndex]);

            // Increment index and loop back to the start
            currentIndex = (currentIndex + 1) % imageUrls.length;
        }

        // Start the slideshow
        window.onload = function() {
            showNextImage(); // Show the first image immediately
            setInterval(showNextImage, 15000); // Change image every 15 seconds
        };
    </script>
</body>
</html>
