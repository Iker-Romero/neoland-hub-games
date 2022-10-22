export const attempts = () => {
  const p = document.createElement("p");

  const span = document.createElement("span");
  span.className = "remaining";

  p.innerHTML = `Attempts remaining ${span}`;
} 