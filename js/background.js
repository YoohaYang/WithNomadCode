const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const body = document.body;
body.style.backgroundImage = `url("img/${chosenImage}")`

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// bgImage.classList.add("hidden");
// document.body.appendChild(bgImage);

