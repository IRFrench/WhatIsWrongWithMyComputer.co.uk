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
let random = Math.floor(Math.random() * hangmanWords.length);
let randomWord = hangmanWords[random];
let chosenWord = randomWord.toUpperCase();
let chosenWordLetters = chosenWord.split("");

// The input for the letters
const letterInput = document.getElementById("letterInput");

// The string of tried letters
const triedLetterDisplay = document.getElementById("triedLetter");

// The string of the words
const letterDisplay = document.getElementById("theWord");

// The outcome announcement
const outcomeDisplay = document.getElementById("outcome");

let guessedLetters = ["Tried Letters: "];
let hiddenWord = [];

// Lives
let hangmanTries = 10;

// For every letter in the guess, add a _ to the hidden word
for (let i = 0; i < chosenWordLetters.length; i++) {
    hiddenWord.push("_");
}

const validLetters = new RegExp("^(?:[A-Z]|[0-9])$")

// Display the hidden word
letterDisplay.textContent = hiddenWord.join(" ");
triedLetterDisplay.textContent = guessedLetters.join(" ");




function letterCheck(event) {

    let enteredLetter = event.key.toUpperCase()

    // If the letter has already been guessed
    if (guessedLetters.includes(enteredLetter)) {
        return;
    }

    if (outcomeDisplay.textContent !== "") {
        return;
    }

    if (!validLetters.test(enteredLetter)) {
        return;
    }

    letterInput.textContent = enteredLetter

    // Update the guessed words
    guessedLetters.push(enteredLetter);
    triedLetterDisplay.textContent = guessedLetters.join(" ");

    // If the guessed letter is in the chosen word
    if (chosenWordLetters.includes(enteredLetter)) {

        // Add the letter to  the hidden word in the correct place
        for (let i = 0; i < chosenWordLetters.length; i++) {
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
    let currentPosition = 10 - hangmanTries;

    // Display the hangman body
    let hangmanBody = document.getElementById("hangman_" + currentPosition);
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

function reset() {
    // Get the chosen word and turn it into letters
    random = Math.floor(Math.random() * hangmanWords.length);
    randomWord = hangmanWords[random];
    chosenWord = randomWord.toUpperCase();
    chosenWordLetters = chosenWord.split("");

    guessedLetters = ["Tried Letters: "];
    hiddenWord = [];

    // Lives
    hangmanTries = 10;

    // For every letter in the guess, add a _ to the hidden word
    for (let i = 0; i < chosenWordLetters.length; i++) {
        hiddenWord.push("_");
    }

    // Display the hidden word
    letterDisplay.textContent = hiddenWord.join(" ");
    triedLetterDisplay.textContent = guessedLetters.join(" ");

    outcomeDisplay.textContent = "";
    letterInput.textContent = "";

    for (let i = 1; i <= 10; i++) {
        document.getElementById("hangman_" + i).style.display = "none";
    }
}

document.addEventListener("keydown", letterCheck);
