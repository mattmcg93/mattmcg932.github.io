---
layout: cubegame
title: "Cube Game"
excerpt: "TARDIS Flying Simulator"
image: /assets/images/tardis.png
---

<!DOCTYPE html>
<html>
<head>
    <title>Rotating Cube</title>
    <style>
        /* Your existing CSS from the previous HTML */
    </style>
</head>
<body>
    <div id="info">
        Use Arrow Keys to move the cube:<br>
        LEFT/RIGHT : Move Left/Right<br>
        UP/DOWN : Move Forward/Backward<br>
        SPACE : Fly Up
    </div>
    <div id="controls">
        <!-- Your existing control buttons -->
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
        // Your full Three.js script
        // Make sure to update image paths to /assets/images/...
        const spaceTexture = textureLoader.load('/assets/images/space_background.png');
        const tardisTexture = loader.load('/assets/images/tardis_sides.png');
        const tardisTopBottomTexture = loader.load('/assets/images/tardis_top_bottom.png');
        
        // Rest of the script remains the same
    </script>
</body>
</html>
