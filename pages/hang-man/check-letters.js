export const checkLetters = (wordLetters, attempts) => {
  const submitLetter = document.querySelector("#submitLetter");

  const letters = document.querySelectorAll(".letter");

  let charactersWritten = 0;

  const remaining = document.querySelector(".remaining");

  const hangManPhases = [
    "https://res.cloudinary.com/dvwva99mi/image/upload/v1666453803/neoland-hub-games/hang-man/hang-man-1_gbn3k9.svg",
    "https://res.cloudinary.com/dvwva99mi/image/upload/v1666453808/neoland-hub-games/hang-man/hang-man-2_vz1gxj.svg",
    "https://res.cloudinary.com/dvwva99mi/image/upload/v1666453822/neoland-hub-games/hang-man/hang-man-3_gskz0k.svg",
    "https://res.cloudinary.com/dvwva99mi/image/upload/v1666453825/neoland-hub-games/hang-man/hang-man-4_hhlc7d.svg",
  ];

  const hangManImage = document.querySelector(".hang-man-image");

  let phase = 0;
  hangManImage.setAttribute("src", hangManPhases[phase]);

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

      phase++;
      hangManImage.setAttribute("src", hangManPhases[phase]);

      setTimeout(() => {
        attempts === 0 && alert("HAS PERDIDO");
      }, 100);
    }
  });
};
