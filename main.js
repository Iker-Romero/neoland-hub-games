import { changeTheme } from "./components/change-theme/change-theme";
import { login } from "./components/login/login";
import "./style.css";

const init = () => {
  login();
  changeTheme();
};

init();
