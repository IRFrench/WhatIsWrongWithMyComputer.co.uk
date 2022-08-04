const hangmanWords = [
    "code",
    "monitor",
    "python",
    "programming",
    "tower",
    "keyboard",
    "mouse",
    "laptop",
    "development",
    "javascript",
    "internet",
    "wifi",
    "frontend",
    "computer",
    "bugs",
    "html",
    "hangman",
    "exa",
    "network",
    "cpu",
    "server",
    "router",
    "ethernet",
];

// Get the chosen word and turn it into letters
const random = Math.floor(Math.random() * hangmanWords.length);
const randomWord = hangmanWords[random];
const chosenWord = randomWord.toUpperCase();
const chosenWordLetters = chosenWord.split("");

// The input for the letters
const letterInput = document.getElementById("letterInput");

// The string of tried letters
const triedLetterDisplay = document.getElementById("triedLetter");

// The string of the words
const letterDisplay = document.getElementById("theWord");

// The outcome announcement
const outcomeDisplay = document.getElementById("outcome");

const guessedLetters = ["Tried Letters: "];
const hiddenWord = [];

// Lives
var hangmanTries = 10;

// For every letter in the guess, add a _ to the hidden word
for (var i = 0; i < chosenWordLetters.length; i++) {
    hiddenWord.push("_");
}

// Display the hidden word
letterDisplay.textContent = hiddenWord.join(" ");




function letterCheck() {

    // If the input is empty
    if (letterInput.value === "") {
        return;
    }

    // Get the entered letter, and remove any others
    const newlyenteredLetter = letterInput.value.split("").pop();
    let enteredLetter = newlyenteredLetter.toUpperCase();
    letterInput.value = enteredLetter;

    // If the letter has already been guessed
    if (guessedLetters.includes(enteredLetter)) {
        return;
    }

    if (outcomeDisplay.textContent !== "") {
        return;
    }

    // Update the guessed words
    guessedLetters.push(enteredLetter);
    triedLetterDisplay.textContent = guessedLetters.join(" ");

    // If the guessed letter is in the chosen word
    if (chosenWordLetters.includes(enteredLetter)) {

        // Add the letter to  the hidden word in the correct place
        for (var i = 0; i < chosenWordLetters.length; i++) {
            if (chosenWordLetters[i] === enteredLetter) {
                hiddenWord[i] = enteredLetter;
                letterDisplay.textContent = hiddenWord.join(" ");
            }
        }

        CheckResult();
        return;
    }

    // Lose a life
    hangmanTries -= 1;
    hangman();
    CheckResult();
    return;
}

function hangman() {
    // Get incremental numbers
    var currentPosition = 10 - hangmanTries;

    // Display the hangman body
    var hangmanBody = document.getElementById("hangman_" + currentPosition);
    hangmanBody.style.display = "block";
}


function CheckResult() {
    // If there is no _'s in the hidden word
    if (!hiddenWord.includes("_")) {
        outcomeDisplay.style.color = "green";
        outcomeDisplay.textContent = "YOU WIN!"
        return;
    }

    // If there is no lives left
    if (hangmanTries <= 0) {
        outcomeDisplay.style.color = "red";
        outcomeDisplay.textContent = "YOU LOSE, THE WORD WAS: " + chosenWord.toUpperCase();
        return;
    }
}


letterInput.addEventListener("input", letterCheck);
