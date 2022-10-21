export const disorder = (array) => {
  const arrayCopy = array.slice();
  const disordered = [];

  while (disordered.length < array.length) {
    const random = Math.floor(Math.random() * arrayCopy.length);

    disordered.push(arrayCopy[random]);
    arrayCopy.splice(random, 1);
  }

  return disordered;
}
