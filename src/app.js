/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let seeds = ["♦", "♥", "♠", "♣"];

  let cardNumber = document.querySelector("#cardNumber");
  cardNumber.style.fontSize = "50px";
  let cardSeeds = document.querySelectorAll(".cardSeed");

  let randomNumberIndex = Math.floor(Math.random() * numbers.length);
  cardNumber.innerHTML = numbers[randomNumberIndex];

  let randomSeedIndex = Math.floor(Math.random() * seeds.length);
  for (let x = 0; x < cardSeeds.length; x++) {
    if (randomSeedIndex <= 1) {
      cardSeeds[x].style.color = "red";
    }
    cardSeeds[x].innerHTML = seeds[randomSeedIndex];
    cardSeeds[x].style.fontSize = "50px";
  }
};
