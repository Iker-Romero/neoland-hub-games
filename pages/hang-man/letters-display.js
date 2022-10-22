export const lettersDisplay = (wordLetters) => {
  const lettersContainer = document.createElement("div");
  lettersContainer.className = "letters-container";

  wordLetters.forEach(() => {
    lettersContainer.innerHTML += `
    <div class="letter"></div>
    `;
  })

  return lettersContainer.outerHTML;
}