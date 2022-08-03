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
    "wifi"
];

const random = Math.floor(Math.random() * hangmanWords.length);

const chosenWord = hangmanWords[random];
const chosenWordLetters = chosenWord.split("")

const letterInput = document.getElementById("letterInput")

function letterCheck() {

    if (letterInput.value === "") {
        return;
    }

    const enteredLetter = letterInput.value.split("").pop()
    letterInput.value = enteredLetter

    // If letter in chosen word, pull that up. Else, 1 more hang man
    // If word = complete, you win! Else, you lose!
}

letterInput.addEventListener("input", letterCheck)
