export const quizTemplate = () => {
  const template = `
      <main>
        <h1>🚗 Quiz Ride 🐎</h1>
        
      </main>
    `;

  const header = document.querySelector("header");
  header.insertAdjacentHTML("afterend", template);
};
