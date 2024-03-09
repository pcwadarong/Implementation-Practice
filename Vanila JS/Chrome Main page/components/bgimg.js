const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");
//image.src = `img/${chosenImage}`;
image.classList.add("bgImg");
image.style.backgroundImage = `url("./assets/img/${chosenImage}")`;
document.body.appendChild(image);