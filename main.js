import { changeTheme } from "./components/change-theme/change-theme";
import { footer } from "./components/footer/footer";
import { login } from "./pages/login/login";
import { nav } from "./components/nav/nav";
import { randomColor } from "./components/random-color/random-color";
import "./style.css";

const init = () => {
  nav()
  randomColor();
  changeTheme();
  login();
  footer();
};

init();
