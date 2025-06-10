const words = [
    { word: "python", hint: "A programming language" },
    { word: "react", hint: "JavaScript library for building UI" },
    { word: "java", hint: "Used in Android app development" },
    { word: "html", hint: "Markup language for creating webpages" }
  ];
  
  const randomWordObj = words[Math.floor(Math.random() * words.length)];
  const secretWord = randomWordObj.word.toLowerCase();
  let guessedLetters = [];
  let displayWord = Array(secretWord.length).fill("_");
  
  const hintEle = document.getElementById("hint");
  const wordDisplay = document.getElementById("wordDisplay");
  const letterInput = document.getElementById("letterInput");
  const guessedLettersEle = document.getElementById("guessedLetters");
  const form = document.getElementById("guessForm");
  
  hintEle.textContent = randomWordObj.hint;
  wordDisplay.textContent = displayWord.join(" ");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const guess = letterInput.value.toLowerCase();
    letterInput.value = "";
  
    if (!/^[a-z]$/.test(guess)) {
      alert("Please enter a valid letter.");
      return;
    }
  
    if (guessedLetters.includes(guess)) {
      alert("You have already guessed that letter!");
      return;
    }
  
    guessedLetters.push(guess);
    guessedLettersEle.textContent = guessedLetters.join(", ");
  
    if (secretWord.includes(guess)) {
      for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === guess) {
          displayWord[i] = guess;
        }
      }
      wordDisplay.textContent = displayWord.join(" ");
    }
  
    if (!displayWord.includes("_")) {
      alert("🎉 You have guessed the word correctly!");
      letterInput.disabled = true;
    }
  });
  