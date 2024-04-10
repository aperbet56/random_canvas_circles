// Récupérartion des éléments
const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;

canvas.width = width;
canvas.height = height;

// Création de la fonction ramdon qui a pour paramètre number afin de créer un nombre aléatoire
const random = (number) => {
  return Math.floor(Math.random() * number);
};

// Création de la fonction draw qui va permettre de dessiner les bulles
const draw = () => {
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(0,0,255,0.5)";
    ctx.arc(random(width), random(height), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
};

// Ecoute de l'événement click sur le bouton et appel de la fonction draw
btn.addEventListener("click", draw);
