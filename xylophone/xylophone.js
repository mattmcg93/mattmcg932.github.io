var wordNumber = 0;
var soundsPath = "sounds/";
var extension = ".mp3";

// Corresponding text and image paths
var words = ["Leo", "You", "Cant", "Catch", "Me"];
var images = ["images/leo.jpg", "images/you.jpg", "images/cant.jpg", "images/catch.jpg", "images/me.jpg"]; // Replace with actual image file names

var manifest = [
    [ // Leo
        "1_1",
        "1_2",
        "1_3",
        "1_4",
        "1_5",
    ],
    [ // You
        "2_1",
        "2_2",
        "2_3",
        "2_4",
        "2_5",
    ],
    [ // Cant
        "3_1",
        "3_2",
        "3_3",
        "3_4",
        "3_5",
    ],
    [ // Catch
        "4_1",
        "4_2",
        "4_3",
        "4_4",
        "4_5",
    ],
    [ // Me
        "5_1",
        "5_2",
        "5_3",
        "5_4",
        "5_5",
    ]];

function playSound(target) {
    // Play the sound
    new Audio(soundsPath + manifest[wordNumber][target.id] + extension).play();

    // Update the text above the xylophone
    document.getElementById("displayText").textContent = words[wordNumber];

    // Update the image above the xylophone
    document.getElementById("xylophoneImage").src = images[wordNumber];

    // Cycle to the next word
    if (wordNumber < 4) {
        wordNumber++;
    } else {
        wordNumber = 0;
    }
}
