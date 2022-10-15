const contactInfo = [
  {
    name: "Iker Romero Carames",
    socialNetworks: {
      github: {
        icon: "https://res.cloudinary.com/dvwva99mi/image/upload/v1665572313/logos/github-light_bblejx.png",
        link: "https://github.com/Iker-Romero",
      },
      linkedin: {
        icon: "https://res.cloudinary.com/dvwva99mi/image/upload/v1665572313/logos/linkedin_tk9sdm.png",
        link: "https://www.linkedin.com/in/iker-romero-645b70251/",
      },
    },
  },
];

export const footer = () => {
  const footer = `
    <footer>
      <p class="copyright">© 2022 | Developed by: ${contactInfo[0].name}.</p>
      <ul class="contact-icons">
        <li>
            <a href="${contactInfo[0].socialNetworks.github.link}" target="_blank">
            <img src="${contactInfo[0].socialNetworks.github.icon}" alt="">
          </a>
        </li>
      </ul>
    </footer>
    `;
  const target = document.querySelector("#app");
  target.insertAdjacentHTML("beforeend", footer);
};
