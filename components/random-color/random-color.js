export const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const color = `rgb(${red}, ${green}, ${blue})`;

  app.style.backgroundColor = color;

  const nav = document.querySelector("nav");
  nav.style = `background-color:${color};`;
};
