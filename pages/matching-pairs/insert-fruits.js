export const insertFruits = (fruits, i) => {
  const card = document.getElementById(i);
  card.innerHTML = fruits[i - 1];
};