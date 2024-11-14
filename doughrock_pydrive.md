<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOUGHROCK PYDRIVE</title>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            overflow: hidden;
        }

        iframe {
            border: none;
            width: 100%;
            height: auto;
            max-width: 640px; /* Prevents exceeding the original dimensions */
        }

        /* Camera iframes with a 4:3 ratio */
        .camera-iframe {
            aspect-ratio: 4 / 3; /* Maintains 4:3 aspect ratio */
        }

        /* Temperature plot iframes with a 16:9 ratio */
        .temperature-iframe {
            aspect-ratio: 16 / 9; /* Maintains 16:9 aspect ratio */
        }

        .imgbox {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }

        /* Column layout for small screens */
        @media screen and (max-width: 768px) {
            iframe {
                width: 90%; /* Make iframes take up 90% of the screen width */
            }

            .imgbox {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
    </style>
</head>
<body>
    <div class="center">
        <h1 style="text-align:center;">Welcome to Doughrock</h1>

        <div class="imgbox" id="image-container">
            <iframe class="camera-iframe" id="camera1" width="640" height="480"></iframe>
            <iframe class="camera-iframe" id="camera2" width="640" height="480"></iframe>
            <iframe class="camera-iframe" id="camera3" width="640" height="480"></iframe>
            <iframe class="camera-iframe" id="camera4" width="640" height="480"></iframe>
        </div>

        <h2 style="text-align:center;">Temperature Plots:</h2>
        <div class="imgbox" id="temperature-plots-container">
            <iframe class="temperature-iframe" id="temperature1" width="640" height="360"></iframe>
            <iframe class="temperature-iframe" id="temperature2" width="640" height="360"></iframe>
        </div>

        <button id="toggleButton" onclick="toggleLED()">Toggle LED</button>
        <p id="ledStatus">LED is OFF</p>
    </div>

    <script>
        var ledState = false;

        function toggleLED() {
            var toggleButton = document.getElementById('toggleButton');
            var ledStatus = document.getElementById('ledStatus');

            if (ledState) {
                ledState = false;
                toggleButton.textContent = "Turn LED On";
                ledStatus.textContent = "LED is OFF";
            } else {
                ledState = true;
                toggleButton.textContent = "Turn LED Off";
                ledStatus.textContent = "LED is ON";
            }
        }

        function appendRandomParamToUrl(url) {
            const randomParam = Date.now() + Math.random().toString(36).substring(7); // Timestamp + random string
            return `${url}?v=${randomParam}`; // Append unique parameter to bypass cache
        }

        function updateIframeSources() {
            const cameraUrls = [
                'https://drive.google.com/file/d/10b5QfBtU1xx-qggz_UjoZn0sMfJmT9ZI/preview',
                'https://drive.google.com/file/d/19KHRWco6o_U3SB1Zsof58MvGyPbO6j__/preview',
                'https://drive.google.com/file/d/11yc6_LOWjh5L9pXkMV1-pV8QbidulJSQ/preview',
                'https://drive.google.com/file/d/1prHvQ2rbwoUfv5nf-ig4mAGznxFbePXq/preview'
            ];

            const temperatureUrls = [
                'https://drive.google.com/file/d/1CUPkHJvfNaihCiTkOycwY8zlptEwW5-r/preview',
                'https://drive.google.com/file/d/1KNUjtFYwoI3hzEsjXtSgB0L2DDajNKfH/preview'
            ];

            cameraUrls.forEach((url, index) => {
                document.getElementById(`camera${index + 1}`).src = appendRandomParamToUrl(url);
            });

            temperatureUrls.forEach((url, index) => {
                document.getElementById(`temperature${index + 1}`).src = appendRandomParamToUrl(url);
            });
        }

        // Refresh every 10 seconds to force updated images
        function startAutoRefresh() {
            updateIframeSources();
            setInterval(updateIframeSources, 10000); // Every 10 seconds
        }

        window.onload = startAutoRefresh;
    </script>
</body>
</html>
