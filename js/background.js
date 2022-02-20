const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const body = document.querySelector("body");

body.style.background = "url(img/" + chosenImage + ") no-repeat fixed center/100%";