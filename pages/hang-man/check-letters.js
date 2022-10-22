export const checkLetters = (wordLetters) => {
  const submitLetter = document.querySelector("#submitLetter");
  const letters = document.querySelectorAll(".letter");
  let charactersWritten = 0;

  submitLetter.addEventListener("click", () => {
    const input = document.querySelector("#letterInput");
    const letter = input.value;

    wordLetters.forEach((element, i) => {
      if (element === letter) {
        letters[i].innerHTML = letter;

        charactersWritten++;

        input.value = "";

        // Delay to avoid the anticipation of the alert() and let the las letter be printed first
        setTimeout(() => {
          if (wordLetters.length === charactersWritten) {
            alert("VICTORIA");
          }
        }, 100);
      }
    });
  });
};
