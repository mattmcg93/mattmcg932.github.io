<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Slideshow Controller</title>
    <script>
        const imageUrls = [
            'https://drive.google.com/file/d/10b5QfBtU1xx-qggz_UjoZn0sMfJmT9ZI/preview',
            'https://drive.google.com/file/d/19KHRWco6o_U3SB1Zsof58MvGyPbO6j__/preview',
            'https://drive.google.com/file/d/11yc6_LOWjh5L9pXkMV1-pV8QbidulJSQ/preview'
        ];

        let currentIndex = 0;

        function navigateToNextImage() {
            currentIndex = (currentIndex + 1) % imageUrls.length;
            window.location.href = imageUrls[currentIndex] + "?next=" + encodeURIComponent(window.location.href);
        }

        // Automatically switch images every 15 seconds
        window.onload = function() {
            setTimeout(navigateToNextImage, 15000);
        };
    </script>
</head>
<body>
    <h1>Loading Slideshow...</h1>
</body>
</html>
