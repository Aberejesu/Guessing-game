const guessButton = document.getElementById('guess-button');
const userGuessInput = document.getElementById('user-guess');
const messageElement = document.getElementById('message');

let randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number
let attemptsLeft = 3;

guessButton.addEventListener('click', handleGuess);

function handleGuess() {
  const userGuess = parseInt(userGuessInput.value);

  if (isNaN(userGuess)) {
    messageElement.textContent = 'Please enter a valid number!';
    return;
  }

  if (attemptsLeft === 0) {
    messageElement.textContent = `You're out of guesses! The number was ${randomNumber}`;
    guessButton.disabled = true;
    return;
  }

  attemptsLeft--;

  if (userGuess === randomNumber) {
    messageElement.textContent = 'Congratulations! You guessed the number!';
    guessButton.disabled = true;
  } else if (userGuess < randomNumber) {
    messageElement.textContent = 'Your guess is too low. Try again!';
  } else {
    messageElement.textContent = 'Your guess is too high. Try again!';
  }

  userGuessInput.value = ''; // Clear input field after each guess
}
