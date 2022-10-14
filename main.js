import { changeTheme } from "./components/change-theme/change-theme";
import { login } from "./components/login/login";
import { randomColor } from "./components/random-color/random-color";
import "./style.css";

const init = () => {
  randomColor();
  changeTheme();
  login();
};

init();
