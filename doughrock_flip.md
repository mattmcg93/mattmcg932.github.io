<script>
let images = [
    'https://dl.dropbox.com/scl/fi/0gtuqbpf7lm96xzdxeokx/capture1.jpg?rlkey=kc2kwu9ntn4h4atdta0h4bz3q&st=gpqpb66w&dl=1',
    'https://dl.dropbox.com/scl/fi/uy7wnnd292doq8ipq4ref/captureEthernet.jpg?rlkey=lqvtll9d5hmgyk9drbcm45o3i&st=nxgwun9b&dl=1',
    'https://dl.dropbox.com/scl/fi/xh5ml5to3afne3zyhsnbb/capture3.jpg?rlkey=0d4f26lwyyvx4amyngsvy37d9&st=kla64jwv&dl=1'
];

let currentIndex = 0;

function showImage() {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // Clear the container
    const img = document.createElement('img');
    img.src = images[currentIndex];
    img.style.width = '100vw'; // Full screen width
    img.style.height = '100vh'; // Full screen height
    img.style.objectFit = 'cover'; // Maintain aspect ratio and cover the screen
    imageContainer.appendChild(img);

    // Move to the next image after 10 seconds
    currentIndex = (currentIndex + 1) % images.length;
}

function startSlideshow() {
    showImage(); // Show the first image
    setInterval(showImage, 10000); // Change image every 10 seconds
}

// Start the slideshow when the page loads
window.onload = startSlideshow;
</script>
