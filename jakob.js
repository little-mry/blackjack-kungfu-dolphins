const cardDeck = [
  {
    name: "Ace of clubs",
    value: undefined,
    image: "./img/clubs-A.png",
  },
  {
    name: "King of clubs",
    value: 10,
    image: "./img/clubs-K.png",
  },
  {
    name: "Queen of clubs",
    value: 10,
    image: "./img/clubs-Q.png",
  },
  {
    name: "Jack of clubs",
    value: 10,
    image: "./img/clubs-J.png",
  },
  {
    name: "Ten of clubs",
    value: 10,
    image: "./img/clubs-10.png",
  },
  {
    name: "Nine of clubs",
    value: 9,
    image: "./img/clubs-9.png",
  },
  {
    name: "Eight of clubs",
    value: 8,
    image: "./img/clubs-8.png",
  },
  {
    name: "Seven of clubs",
    value: 7,
    image: "./img/clubs-7.png",
  },
  {
    name: "Six of clubs",
    value: 6,
    image: "./img/clubs-6.png",
  },
  {
    name: "Five of clubs",
    value: 5,
    image: "./img/clubs-5.png",
  },
  {
    name: "Four of clubs",
    value: 4,
    image: "./img/clubs-4.png",
  },
  {
    name: "Three of clubs",
    value: 3,
    image: "./img/clubs-3.png",
  },
  {
    name: "Two of clubs",
    value: 2,
    image: "./img/clubs-2.png",
  },

  {
    name: "Ace of diamonds",
    value: undefined,
    image: "./img/diamonds-A.png",
  },
  {
    name: "King of diamonds",
    value: 10,
    image: "./img/diamonds-K.png",
  },
  {
    name: "Queen of diamonds",
    value: 10,
    image: "./img/diamonds-Q.png",
  },
  {
    name: "Jack of diamonds",
    value: 10,
    image: "./img/diamonds-J.png",
  },
  {
    name: "Ten of diamonds",
    value: 10,
    image: "./img/diamonds-10.png",
  },
  {
    name: "Nine of diamonds",
    value: 9,
    image: "./img/diamonds-9.png",
  },
  {
    name: "Eight of diamonds",
    value: 8,
    image: "./img/diamonds-8.png",
  },
  {
    name: "Seven of diamonds",
    value: 7,
    image: "./img/diamonds-7.png",
  },
  {
    name: "Six of diamonds",
    value: 6,
    image: "./img/diamonds-6.png",
  },
  {
    name: "Five of diamonds",
    value: 5,
    image: "./img/diamonds-5.png",
  },
  {
    name: "Four of diamonds",
    value: 4,
    image: "./img/diamonds-4.png",
  },
  {
    name: "Three of diamonds",
    value: 3,
    image: "./img/diamonds-3.png",
  },
  {
    name: "Two of diamonds",
    value: 2,
    image: "./img/diamonds-2.png",
  },

  {
    name: "Ace of spades",
    value: undefined,
    image: "./img/spades-A.png",
  },
  {
    name: "King of spades",
    value: 10,
    image: "./img/spades-K.png",
  },
  {
    name: "Queen of spades",
    value: 10,
    image: "./img/spades-Q.png",
  },
  {
    name: "Jack of spades",
    value: 10,
    image: "./img/spades-J.png",
  },
  {
    name: "Ten of spades",
    value: 10,
    image: "./img/spades-10.png",
  },
  {
    name: "Nine of spades",
    value: 9,
    image: "./img/spades-9.png",
  },
  {
    name: "Eight of spades",
    value: 8,
    image: "./img/spades-8.png",
  },
  {
    name: "Seven of spades",
    value: 7,
    image: "./img/spades-7.png",
  },
  {
    name: "Six of spades",
    value: 6,
    image: "./img/spades-6.png",
  },
  {
    name: "Five of spades",
    value: 5,
    image: "./img/spades-5.png",
  },
  {
    name: "Four of spades",
    value: 4,
    image: "./img/spades-4.png",
  },
  {
    name: "Three of spades",
    value: 3,
    image: "./img/spades-3.png",
  },
  {
    name: "Two of spades",
    value: 2,
    image: "./img/spades-2.png",
  },

  {
    name: "Ace of hearts",
    value: undefined,
    image: "./img/hearts-A.png",
  },
  {
    name: "King of hearts",
    value: 10,
    image: "./img/hearts-K.png",
  },
  {
    name: "Queen of hearts",
    value: 10,
    image: "./img/hearts-Q.png",
  },
  {
    name: "Jack of hearts",
    value: 10,
    image: "./img/hearts-J.png",
  },
  {
    name: "Ten of hearts",
    value: 10,
    image: "./img/hearts-10.png",
  },
  {
    name: "Nine of hearts",
    value: 9,
    image: "./img/hearts-9.png",
  },
  {
    name: "Eight of hearts",
    value: 8,
    image: "./img/hearts-8.png",
  },
  {
    name: "Seven of hearts",
    value: 7,
    image: "./img/hearts-7.png",
  },
  {
    name: "Six of hearts",
    value: 6,
    image: "./img/hearts-6.png",
  },
  {
    name: "Five of hearts",
    value: 5,
    image: "./img/hearts-5.png",
  },
  {
    name: "Four of hearts",
    value: 4,
    image: "./img/hearts-4.png",
  },
  {
    name: "Three of hearts",
    value: 3,
    image: "./img/hearts-3.png",
  },
  {
    name: "Two of hearts",
    value: 2,
    image: "./img/hearts-2.png",
  },
];

// ändra name = hearts o ha value till de va de är..så kan man sätta template strings
// när man sätter in bilderna i cointainern..
// kanske ändra till valör ist? : hearts ex...

function randomCard() {
  let randomNumber = Math.floor(Math.random() * 52); //byt namn till randomCard?
  //   console.log(randomNumber);

  const playerHtmlEl = document.querySelector(".card-container-player");
  const cardHtml =
    (playerHtmlEl.innerHTML += `<div> ${cardDeck[randomNumber].image}</div>`); //vi ska undvika innerHTML pga säkerhetsrisk?
  // måste få att den slumpar 2 olika..
  return cardHtml;
}
// randomCard();

const btnEl = document.querySelector(".play-btn");
btnEl.addEventListener("click", randomCard);

//vi måste se till att den inte drar samma kort flera gånger?
