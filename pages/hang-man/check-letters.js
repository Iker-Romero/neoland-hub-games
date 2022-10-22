export const checkLetters = (wordLetters, attempts) => {
  const submitLetter = document.querySelector("#submitLetter");

  const letters = document.querySelectorAll(".letter");

  let charactersWritten = 0;

  const remaining = document.querySelector(".remaining");

  submitLetter.addEventListener("click", () => {
    const input = document.querySelector("#letterInput");
    const letter = input.value;
    input.value = "";

    let match = false;
    
    wordLetters.forEach((element, i) => {
      if (element === letter) {
        letters[i].innerHTML = letter;

        charactersWritten++;

        // Delay to avoid the anticipation of the alert() and let the las letter be printed first
        setTimeout(() => {
          wordLetters.length === charactersWritten && alert("VICTORIA");
        }, 100);

        match !== true && (match = true);
      }
    });

    if (match === false) {
      attempts--;

      remaining.innerHTML = attempts;

      attempts === 0 && alert("HAS PERDIDO");
    }
  });
};
