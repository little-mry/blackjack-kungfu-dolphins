let totalScorePlayer = 0;
let totalScoreDealer = 0;

// Funktion för att uppdatera poäng för spelare och dealer
function scoreUpdate(card, isPlayer) {
  if (card.value == 11) {
    decideAceValue(card); // Om kortet är ett ess, fråga om dess värde
  }
  if (isPlayer) {
    totalScorePlayer += card.value;
    console.log("Spelarens totala poäng: ", totalScorePlayer);
  } else {
    totalScoreDealer += card.value;
    console.log("Dealerns totala poäng: ", totalScoreDealer);
  }

  //return totolScorePlayer, totalScoreDealer

}



// Funktion för att dra ett slumpmässigt kort för spelare eller dealer
function getRandomCard(isPlayer) {
  let randomNumber = Math.floor(Math.random() * 52);
  const card = cardDeck[randomNumber];

  // Uppdaterar HTML för spelare eller dealer beroende på vem som drar kortet
  const playerHtmlEl = document.querySelector(
    isPlayer ? ".card-container-player" : ".card-container-dealer"
  );
  playerHtmlEl.innerHTML += `
         <img src="${card.image}" alt="${card.suit} ${card.value}">`;

  scoreUpdate(card, isPlayer); // Uppdaterar poängen baserat på vem som drog kortet
  blackjack(); // Kollar om någon har vunnit eller förlorat
}

// Funktion för att starta spel för spelaren
function player() {
  getRandomCard(true); // Spelaren drar sitt första kort
  getRandomCard(true); // Spelaren drar sitt andra kort
}

// Funktion för att starta spel för dealern
function computer() {
  getRandomCard(false); // Dealern drar sitt första kort
  // getRandomCard(false); // Dealern drar sitt andra kort
  //kommenterade ut för la till en fram baksida i funktionen
}

// Kollar blackjack-reglerna
function blackjack() {
  if (totalScorePlayer === 21) {
    console.log("Blackjack! Spelaren vinner!");
  } else if (totalScorePlayer > 21) {
    console.log("Spelaren har förlorat!");
  }

  if (totalScoreDealer === 21) {
    console.log("Blackjack! Dealern vinner!");
  } else if (totalScoreDealer > 21) {
    console.log("Dealern har förlorat!");
  }
}

// EventListeners för att välja mellan att fortsätta eller stanna
document.getElementById("continue-btn").addEventListener("click", function () {
  getRandomCard(true); // Spelaren drar ett extra kort
  console.log("Du valde att fortsätta. Lycka till!");
});

document.getElementById("stay-btn").addEventListener("click", function () {
  console.log("Du valde att stanna. Låt oss se resultatet!");
  // Här kan du implementera dealerns tur om spelaren väljer att stanna
});

// Startar spelet  (satte de som i en egen funktion nu starta spelet)
// player();
// computer();

function decideAceValue(card) {
  const aceValue = prompt(
    "Vill du att värdet på ditt ess ska vara [1] eller [11]?"
  );
  switch (aceValue) {
    case "1":
      card.value = parseInt(aceValue);
      break;
    case "11":
      card.value = parseInt(aceValue);
      break;
    default:
      prompt("Vill du att värdet på ditt ess ska vara [1] eller [11]?");
      break;
  }

  return aceValue;
}

// startar spelet

function backCard() {
  const playerHtmlEl = document.querySelector(".card-container-dealer");
  playerHtmlEl.innerHTML += `
         <img src="./img/card-back.png" alt="">`;
}

const startBtn = document.querySelector(".start-btn");
startBtn.addEventListener("click", start);

let isAlive = false;
function start() {
  isAlive = true;
  if (isAlive) {
    startBtn.classList.add("hidden");
  }
  player();
  computer();
  backCard();
}

// måste göra en funktion sen om vi STANNAR ELLER FÅR 21, SÅ
//så ska de kortet upp o ner få ett värde o flippas bort
