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
  