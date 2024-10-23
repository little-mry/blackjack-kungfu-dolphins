


let totalScore = 0;

function scoreUpdate(card) {
    totalScore += card.value;
    console.log("Totala poäng: ", totalScore )
    return totalScore
}

function GetRandomCard() {
    let randomNumber = Math.floor(Math.random() * 52);
    const card =cardDeck[randomNumber];
  
    const playerHtmlEl = document.querySelector(".card-container-player");
    playerHtmlEl.innerHTML += `
    <img src="/img/${card.suit}-${card.value}.png"></img>`;
 
    scoreUpdate(card);
}
  
  const btnEl = document.querySelector(".play-btn");
  btnEl.addEventListener("click", GetRandomCard);







/*
function blackjack() {
    if (totalvalue == 21) {
        console.log('Blackjack, you won!')
        break;
    }

    else ()
*/
