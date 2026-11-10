
let clickCount = 0;

const quotes = [
    "You're officially one year closer to becoming a wizard!",
    "I solemnly swear that you are up to no good.",
    "You're a wizard, Madi!",
    "Even Dumbledore would approve of this birthday, I think.",
    "Butterbeer, for your birthday?? Not till next year!",
    "White Toe????",
    "I hope these silly quotes are good",
    "Birthday managed!",
    "STOP THE BIRTHDAY, let 'em through",
    "Vas birthday!",
    "Drinking cups sick?",
    "BEHIND YOU!! just kidding:) or am I???"
];

function showBirthday() {
    clickCount++;

    const message = document.getElementById("message");

    if (clickCount === 1) {
        message.textContent = "HAPPY BIRTHDAY!! 🎉💗: Keep clicking the cake";
    } else {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        message.textContent = quotes[randomIndex];
    }

    message.style.display = "block";
}

// Background music controls
const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

music.volume = 0.3;

// Tracks whether the message sequence has already played
let firstMusicClick = true;

// Your messages, in order
const birthdayMessages = [
    "Hey machocho, Hope you vibe to the tunes",
    "I know it isn't the typical style but i had to do a no copyright",
    "I was lowk jamming tho",
    "Anywho, happybirthday uncle",
    "20",
    "oldhead",
    "eat lots of cake!!",
    "or dont, i dont care",
    "anyway, hope u likes this silly thingy",
    "have a wonderful birthday!!"
];

function toggleMusic() {
    if (music.paused) {
        music.play().then(() => {
            musicButton.textContent = "⏸ Pause Music";
        }).catch(error => {
            console.log("Unable to play music:", error);
        });
    } else {
        music.pause();
        musicButton.textContent = "▶ Play Music 🎵";
    }

    // Only runs on the first click
    if (firstMusicClick) {
        firstMusicClick = false;
        showBirthdayMessages();
    }
}

async function showBirthdayMessages() {
    const messageBox = document.getElementById("musicMessage");

    for (let i = 0; i < birthdayMessages.length; i++) {
        messageBox.textContent = birthdayMessages[i];
        messageBox.style.display = "block";

        // Restart fade-in animation
        messageBox.style.animation = "none";
        void messageBox.offsetWidth;
        messageBox.style.animation = "fadeIn 0.5s ease-in";

        // Wait 3 seconds
        await new Promise(resolve => setTimeout(resolve, 3000));
    }

    messageBox.style.display = "none";
}



