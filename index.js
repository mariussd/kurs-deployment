import jonas from 'url:./images/jonas.jpeg';
import erna from 'url:./images/erna.jpeg';

const image = document.getElementById("image");
const button = document.getElementById("button");
const heading = document.getElementById("heading");
const root = document.getElementById("root");

button.addEventListener("click", changePrimeMinister);

const images = [erna, jonas];
const names = ["Erna Solberg", "Jonas Gahr Støre"];
const classnames = ["erna", "jonas"];
let index = 0;

function changePrimeMinister() {
    image.src = images[index % 2];
    heading.innerHTML = names[index % 2];
    root.className = classnames[index % 2];
    index++;
}

changePrimeMinister();