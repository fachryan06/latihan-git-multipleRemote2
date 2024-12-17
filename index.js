var imageCollection = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png",
];

var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var x = randomNumber1;
if (randomNumber1 === x) {
  document.querySelector(".image1").setAttribute("src", imageCollection[x - 1]);
}

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var y = randomNumber2;
if (randomNumber2 === y) {
  document.querySelector(".image2").setAttribute("src", imageCollection[y - 1]);
}

if (x > y) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (y > x) {
  document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
