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
            return `${url}?cb=${Date.now()}`; // Cache-busting with timestamp
        }

        function reloadIframe() {
            const iframe = document.getElementById('slideshow');
            
            // Remove old iframe
            iframe.parentNode.removeChild(iframe);
            
            // Create new iframe with next image
            const newIframe = document.createElement('iframe');
            newIframe.id = 'slideshow';
            newIframe.src = appendCacheBuster(imageUrls[currentIndex]);
            document.body.appendChild(newIframe);

            // Update index and loop
            currentIndex = (currentIndex + 1) % imageUrls.length;
        }

        // Start the slideshow
        window.onload = function() {
            reloadIframe(); // Show the first image immediately
            setInterval(reloadIframe, 15000); // Change image every 15 seconds
        };
    </script>
</body>
</html>
