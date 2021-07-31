const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
let game;
const startImg = new Image();
startImg.src = "./images/startImg.jpeg";
const startLogo = new Image();
startLogo.src = "./images/canvastart.png";
window.onload = () => {
  context.drawImage(startImg, 0, 0, 1000, 500);
  context.drawImage(startLogo, 250, 125, 500, 100);
  context.font = "25px Georgia";
  context.fillStyle = "#b80000";
  context.fillText(
    "Use Up or Down Arrow to move player. Use SpaceBar to fire blast",
    125,
    400
  );
  document.getElementById("start-button").onclick = (e) => {
    game = new Game(canvas, context);
    game.drawLoop();
    game.randomPlayerMove();
    e.target.style.display = "none";
  };
};
