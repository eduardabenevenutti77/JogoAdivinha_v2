document.addEventListener("DOMContentLoaded", () => {
  const maxAttempts = 10;
  let attemptsLeft = maxAttempts;

  const form = document.getElementById("guessForm");
  const guessInput = document.getElementById("guess");
  const messageElement = document.getElementById("message");
  const attemptsElement = document.getElementById("attemptsCount");

  function getRandomNumber() {
    const number = Math.floor(Math.random() * 100) + 1;
    return number;
  }

  let targetNumber = getRandomNumber();

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const guess = parseInt(guessInput.value, 10);

    if (isNaN(guess)) {
      messageElement.textContent = "Por favor, insira um número válido.";
      return;
    }

    if (guess === targetNumber) {
      messageElement.textContent = "Parabéns! Você acertou o número!";
      form.reset();
      attemptsLeft = maxAttempts; // Reinicia o número de tentativas
      attemptsElement.textContent = attemptsLeft;
      targetNumber = getRandomNumber();
      return;
    }

    attemptsLeft--;
    attemptsElement.textContent = attemptsLeft;

    if (attemptsLeft <= 0) {
      messageElement.textContent = `Você perdeu! O número era ${targetNumber}.`;
      form.reset();
      attemptsLeft = maxAttempts; // Reinicia o número de tentativas
      attemptsElement.textContent = attemptsLeft;
      targetNumber = getRandomNumber();
    } else {
      messageElement.textContent =
        guess < targetNumber
          ? "Tente um número maior."
          : "Tente um número menor.";
    }
  });
});
