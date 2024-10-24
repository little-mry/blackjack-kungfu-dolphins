const cardDeck = [
    {
      suit: "clubs",
      value: 11,
      image: "./img/clubs-A.png",
    },
    {
      suit: "clubs",
      value: 10,
      image: "./img/clubs-K.png",
    },
    {
      suit: "clubs",
      value: 10,
      image: "./img/clubs-Q.png",
    },
    {
      suit: "clubs",
      value: 10,
      image: "./img/clubs-J.png",
    },
    {
      suit: "clubs",
      value: 10,
      image: "./img/clubs-10.png",
    },
    {
      suit: "clubs",
      value: 9,
      image: "./img/clubs-9.png",
    },
    {
      suit: "clubs",
      value: 8,
      image: "./img/clubs-8.png",
    },
    {
      suit: "clubs",
      value: 7,
      image: "./img/clubs-7.png",
    },
    {
      suit: "clubs",
      value: 6,
      image: "./img/clubs-6.png",
    },
    {
      suit: "clubs",
      value: 5,
      image: "./img/clubs-5.png",
    },
    {
      suit: "clubs",
      value: 4,
      image: "./img/clubs-4.png",
    },
    {
      suit: "clubs",
      value: 3,
      image: "./img/clubs-3.png",
    },
    {
      suit: "clubs",
      value: 2,
      image: "./img/clubs-2.png",
    },
  
    {
      suit: "diamonds",
      value: 11,
      image: "./img/diamonds-A.png",
    },
    {
      suit: "diamonds",
      value: 10,
      image: "./img/diamonds-K.png",
    },
    {
      suit: "diamonds",
      value: 10,
      image: "./img/diamonds-Q.png",
    },
    {
      suit: "diamonds",
      value: 10,
      image: "./img/diamonds-J.png",
    },
    {
      suit: "diamonds",
      value: 10,
      image: "./img/diamonds-10.png",
    },
    {
      suit: "diamonds",
      value: 9,
      image: "./img/diamonds-9.png",
    },
    {
      suit: "diamonds",
      value: 8,
      image: "./img/diamonds-8.png",
    },
    {
      suit: "diamonds",
      value: 7,
      image: "./img/diamonds-7.png",
    },
    {
      suit: "diamonds",
      value: 6,
      image: "./img/diamonds-6.png",
    },
    {
      suit: "diamonds",
      value: 5,
      image: "./img/diamonds-5.png",
    },
    {
      suit: "diamonds",
      value: 4,
      image: "./img/diamonds-4.png",
    },
    {
      suit: "diamonds",
      value: 3,
      image: "./img/diamonds-3.png",
    },
    {
      suit: "diamonds",
      value: 2,
      image: "./img/diamonds-2.png",
    },
  
    {
      suit: "spades",
      value: 11,
      image: "./img/spades-A.png",
    },
    {
      suit: "spades",
      value: 10,
      image: "./img/spades-K.png",
    },
    {
      suit: "spades",
      value: 10,
      image: "./img/spades-Q.png",
    },
    {
      suit: "spades",
      value: 10,
      image: "./img/spades-J.png",
    },
    {
      suit: "spades",
      value: 10,
      image: "./img/spades-10.png",
    },
    {
      suit: "spades",
      value: 9,
      image: "./img/spades-9.png",
    },
    {
      suit: "spades",
      value: 8,
      image: "./img/spades-8.png",
    },
    {
      suit: "spades",
      value: 7,
      image: "./img/spades-7.png",
    },
    {
      suit: "spades",
      value: 6,
      image: "./img/spades-6.png",
    },
    {
      suit: "spades",
      value: 5,
      image: "./img/spades-5.png",
    },
    {
      suit: "spades",
      value: 4,
      image: "./img/spades-4.png",
    },
    {
      suit: "spades",
      value: 3,
      image: "./img/spades-3.png",
    },
    {
      suit: "spades",
      value: 2,
      image: "./img/spades-2.png",
    },
  
    {
      suit: "hearts",
      value: 11,
      image: "./img/hearts-A.png",
    },
    {
      suit: "hearts",
      value: 10,
      image: "./img/hearts-K.png",
    },
    {
      suit: "hearts",
      value: 10,
      image: "./img/hearts-Q.png",
    },
    {
      suit: "hearts",
      value: 10,
      image: "./img/hearts-J.png",
    },
    {
      suit: "hearts",
      value: 10,
      image: "./img/hearts-10.png",
    },
    {
      suit: "hearts",
      value: 9,
      image: "./img/hearts-9.png",
    },
    {
      suit: "hearts",
      value: 8,
      image: "./img/hearts-8.png",
    },
    {
      suit: "hearts",
      value: 7,
      image: "./img/hearts-7.png",
    },
    {
      suit: "hearts",
      value: 6,
      image: "./img/hearts-6.png",
    },
    {
      suit: "hearts",
      value: 5,
      image: "./img/hearts-5.png",
    },
    {
      suit: "hearts",
      value: 4,
      image: "./img/hearts-4.png",
    },
    {
      suit: "hearts",
      value: 3,
      image: "./img/hearts-3.png",
    },
    {
      suit: "hearts",
      value: 2,
      image: "./img/hearts-2.png",
    },
  ];

  let totalScorePlayer = 0;
  let totalScoreDealer = 0;
  
  const computerScore = document.querySelector('#computer-score');
  const playerScore = document.querySelector('#player-score');
  const gameResult = document.querySelector('.game-result');
  
  // EventListeners för att välja mellan att fortsätta eller stanna
  document.getElementById("continue-btn").addEventListener("click", function () {
      if (totalScorePlayer < 21) {
          getRandomCard(true);
          console.log("Du valde att fortsätta. Lycka till!");
      }
  });
  
  document.getElementById("stay-btn").addEventListener("click", function () {
      console.log("Du valde att stanna. Låt oss se resultatet!");
      dealersTurn(totalScoreDealer);
  });
  
  // Start-knapp event
  const startBtn = document.querySelector(".start-btn");
  startBtn.addEventListener("click", start);
  
  let alive = false;
  
  function start() {  // Startar spelet
      alive = true;
      if (alive) {
          startBtn.classList.add("hidden");
      }
      getRandomCard(true);
      getRandomCard(true);
      getRandomCard(false);
  
      const playerHtmlEl = document.querySelector(".card-container-dealer");
      playerHtmlEl.innerHTML += `<img src="./img/card-back.png" alt="" class="card-back">`;
  }
  
  function getRandomCard(isPlayer) {  // Funktion för att dra ett slumpmässigt kort för spelare eller dealer
      let randomNumber = Math.floor(Math.random() * 52);
      const card = cardDeck[randomNumber];
  
      const playerHtmlEl = document.querySelector(
          isPlayer ? ".card-container-player" : ".card-container-dealer"
      );
  
      playerHtmlEl.innerHTML += `<img src="${card.image}" alt="${card.suit} ${card.value}">`;
  
      scoreUpdate(card, isPlayer);
      blackjack();
  }
  
  function blackjack() {  // Kollar blackjack-reglerna
      if (totalScorePlayer === 21) {
          console.log("Blackjack! Spelaren vinner!");
          gameResult.innerText = "Black Jack! You won!";
          stopGame(); // Stoppar spelet om spelaren når 21
      } else if (totalScorePlayer > 21) {
          console.log("Spelaren har förlorat!");
          gameResult.innerText = "You got busted! Play again?";
          stopGame(); // Stoppar spelet om spelaren går över 21
      }
  
      if (totalScoreDealer === 21) {
          console.log("Blackjack! Dealern vinner!");
          gameResult.innerText = "Black Jack! Computer won!";
          stopGame(); // Stoppar spelet om dealern når 21
      } else if (totalScoreDealer > 21) {
          console.log("Dealern har förlorat!");
          gameResult.innerText = "Computer got busted! You won!";
          stopGame(); // Stoppar spelet om dealern går över 21
      }
  }
  
  function stopGame() {
      document.getElementById("continue-btn").disabled = true;
      document.getElementById("stay-btn").disabled = true;
      startBtn.classList.remove("hidden")
  }
  
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
  
  function scoreUpdate(card, isPlayer) {  // Uppdaterar poäng för spelare och dealer
      if (card.value == 11) {
          decideAceValue(card); // Om kortet är ett ess, fråga om dess värde
      }
      if (isPlayer) {
          totalScorePlayer += card.value;
          playerScore.innerText = `${totalScorePlayer}`;
          console.log("Spelarens totala poäng: ", totalScorePlayer);
      } else {
          totalScoreDealer += card.value;
          computerScore.innerText = `${totalScoreDealer}`;
          console.log("Dealerns totala poäng: ", totalScoreDealer);
      }
  
    
  }
  
  function compareHands(totalScorePlayer, totalScoreDealer) {
      console.log(totalScoreDealer, totalScorePlayer);
      if (totalScoreDealer === 21) {
          gameResult.innerText = "Computer got Black Jack! Rematch?";
          stopGame(); // Stoppar spelet om dealern får 21
      } else if (totalScoreDealer > 21) {
          gameResult.innerText = 'Computer got busted! You won! Play again?';
          stopGame(); // Stoppar spelet om dealern går över 21
      } else if (totalScoreDealer > totalScorePlayer) {
          gameResult.innerText = "Sorry mate, the computer won! Rematch?";
          stopGame(); // Stoppar spelet om dealern vinner
      } else {
          gameResult.innerText = 'YAY! You won! Play again?';
          stopGame(); // Stoppar spelet om spelaren vinner
      }
  }
  
  function dealersTurn(totalScoreDealer) {
      const  dealerPoints = totalScoreDealer
      const cardBack = document.querySelector('.card-back');
      cardBack.remove();

     if(dealerPoints <=16) {
        getRandomCard(false)
        dealersTurn(dealerPoints)
     } else {
         stopGame()
     }


     // compareHands(totalScorePlayer, totalScoreDealer);
  }
  