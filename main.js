import { changeTheme } from "./components/change-theme/change-theme";
import { footer } from "./components/footer/footer";
import { login } from "./components/login/login";
import { randomColor } from "./components/random-color/random-color";
import "./style.css";

const init = () => {
  randomColor();
  changeTheme();
  login();
  footer();
};

init();
