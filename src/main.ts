import "./style.css";
import "./components/button.css";
import "./components/form.css";
import "./components/title.css";
import "./components/nav.css";

const navPrimary = document.querySelector("#nav-primary");

const menuButtonToggler = document.querySelector("#menu-button-toggler");

menuButtonToggler?.addEventListener("click", function () {
  navPrimary?.classList.toggle("active");
});
