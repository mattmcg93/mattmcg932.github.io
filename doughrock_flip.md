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
            overflow: hidden;
        }

        .fullscreen-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    </style>
</head>
<body>
    <iframe id="slideshow" class="fullscreen-image"></iframe>

    <script>
        // Array of Google Drive file IDs for direct media access
        const imageFileIds = [
            '10b5QfBtU1xx-qggz_UjoZn0sMfJmT9ZI',
            '19KHRWco6o_U3SB1Zsof58MvGyPbO6j__',
            '11yc6_LOWjh5L9pXkMV1-pV8QbidulJSQ'
        ];

        let currentImageIndex = 0;

        function appendRandomParamToUrl(url) {
            const randomParam = Math.random().toString(36).substring(7); // Generate a random string
            return `${url}&v=${randomParam}`; // Append the random string to prevent caching
        }

        function showNextImage() {
            // Direct Google Drive file URL for raw content
            const baseUrl = `https://drive.google.com/uc?id=${imageFileIds[currentImageIndex]}&export=view`;
            
            // Get the iframe element and update source with cache-busting parameter
            const iframe = document.getElementById('slideshow');
            iframe.src = appendRandomParamToUrl(baseUrl);

            // Move to the next image, loop back to the first if at the end
            currentImageIndex = (currentImageIndex + 1) % imageFileIds.length;
        }

        // Start the slideshow
        window.onload = function() {
            showNextImage();
            setInterval(showNextImage, 15000); // Change image every 15 seconds
        };
    </script>
</body>
</html>
