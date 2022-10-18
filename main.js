import { changeTheme } from "./components/change-theme/change-theme";
import { footer } from "./components/footer/footer";
import { login } from "./components/login/login";
import { nav } from "./components/nav/nav";
import { randomColor } from "./components/random-color/random-color";
import { transformPokemons } from "./components/transform-pokemons/transform-pokemons";
import "./style.css";

const init = () => {
  randomColor();
  nav()
  changeTheme();
  login();
  footer();
};

init();
