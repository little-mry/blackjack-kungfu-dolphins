function player() {
  GetRandomCardPlayer();
  GetRandomCardPlayer();
}
function computer() {
  GetRandomCardDealer();
  GetRandomCardDealer();
}
player();
computer();

// måste göra if statement för o se om K J Q at vrdet är 10

function GetRandomCardPlayer() {
  let randomNumber = Math.floor(Math.random() * 52); //byt namn till randomCard?
  console.log(randomNumber);

  const playerHtmlEl = (document.querySelector(
    ".card-container-player"
  ).innerHTML += `
            <img src="/img/${cardDec1[randomNumber].suit}-${cardDec1[randomNumber].value}.png"></img>
                `);
  return playerHtmlEl;
  //vi ska undvika innerHTML pga säkerhetsrisk?
}

function GetRandomCardDealer() {
  let randomNumber = Math.floor(Math.random() * 52); //byt namn till randomCard?
  const playerHtmlEl = (document.querySelector(
    ".card-container-dealer"
  ).innerHTML += `
            <img src="/img/${cardDec1[randomNumber].suit}-${cardDec1[randomNumber].value}.png"></img>
                `);
  return playerHtmlEl;
  //vi ska undvika innerHTML pga säkerhetsrisk?
}

function extracard() {
  //kod här för extrakort för deealern och oss
  let randomNumber = Math.floor(Math.random() * 52); //byt namn till randomCard?

  const playerHtmlEl = (document.querySelector(
    ".card-container-player"
  ).innerHTML += `
            <img src="/img/${cardDec1[randomNumber].suit}-${cardDec1[randomNumber].value}.png"></img>
                `);
  return playerHtmlEl;
}

const nextCardBtn = document
  .querySelector(".play-btn")
  .addEventListener("click", extracard);
//vi måste se till att den inte drar samma kort flera gånger? */

// lallaallala
