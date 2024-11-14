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
    </style>
</head>
<body>
    <script>
        // Array of Google Drive preview URLs
        const imageUrls = [
            'https://drive.google.com/file/d/10b5QfBtU1xx-qggz_UjoZn0sMfJmT9ZI/preview',
            'https://drive.google.com/file/d/19KHRWco6o_U3SB1Zsof58MvGyPbO6j__/preview',
            'https://drive.google.com/file/d/11yc6_LOWjh5L9pXkMV1-pV8QbidulJSQ/preview'
        ];

        let currentImageIndex = 0;

        function showNextImage() {
            // Navigate directly to the next URL
            window.location.href = imageUrls[currentImageIndex];

            // Move to the next image, loop back to the first if at the end
            currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
        }

        // Start the slideshow
        window.onload = function() {
            setInterval(showNextImage, 15000); // Change image every 15 seconds
            showNextImage(); // Show the first image immediately
        };
    </script>
</body>
</html>
