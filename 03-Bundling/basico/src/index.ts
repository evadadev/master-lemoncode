import "./style.scss";
import logoImg from "./content/logo_1.png";


const saluda: string = "Hola Lemoncoders, éste es mi básico";

document.write(saluda);

const img = document.createElement("img");
img.src = logoImg;
document.getElementById("imgContainer").appendChild(img);