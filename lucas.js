const cardDeck = [
    {
        suit: 'clubs',
        value: 11,
        image: './img/clubs-A.png'
    },
    {
        suit: 'clubs',
        value: 10,
        image: './img/clubs-K.png'
    },
    {
        suit: 'clubs',
        value: 10,
        image: './img/clubs-Q.png'
    },
    {
        suit: 'clubs',
        value: 10,
        image: './img/clubs-J.png'
    },
    {
        suit: 'clubs',
        value: 10,
        image: './img/clubs-10.png'
    },
    {
        suit: 'clubs',
        value: 9,
        image: './img/clubs-9.png'
    },
    {
        suit: 'clubs',
        value: 8,
        image: './img/clubs-8.png'
    },
    {
        suit: 'clubs',
        value: 7,
        image: './img/clubs-7.png'
    },
    {
        suit: 'clubs',
        value: 6,
        image: './img/clubs-6.png'
    },
    {
        suit: 'clubs',
        value: 5,
        image: './img/clubs-5.png'
    },
    {
        suit: 'clubs',
        value: 4,
        image: './img/clubs-4.png'
    },
    {
        suit: 'clubs',
        value: 3,
        image: './img/clubs-3.png'
    },
    {
        suit: 'clubs',
        value: 2,
        image: './img/clubs-2.png'
    },

    {
        suit: 'diamonds',
        value: 11,
        image: './img/diamonds-A.png'
    },
    {
        suit: 'diamonds',
        value: 10,
        image: './img/diamonds-K.png'
    },
    {
        suit: 'diamonds',
        value: 10,
        image: './img/diamonds-Q.png'
    },
    {
        suit: 'diamonds',
        value: 10,
        image: './img/diamonds-J.png'
    },
    {
        suit: 'diamonds',
        value: 10,
        image: './img/diamonds-10.png'
    },
    {
        suit: 'diamonds',
        value: 9,
        image: './img/diamonds-9.png'
    },
    {
        suit: 'diamonds',
        value: 8,
        image: './img/diamonds-8.png'
    },
    {
        suit: 'diamonds',
        value: 7,
        image: './img/diamonds-7.png'
    },
    {
        suit: 'diamonds',
        value: 6,
        image: './img/diamonds-6.png'
    },
    {
        suit: 'diamonds',
        value: 5,
        image: './img/diamonds-5.png'
    },
    {
        suit: 'diamonds',
        value: 4,
        image: './img/diamonds-4.png'
    },
    {
        suit: 'diamonds',
        value: 3,
        image: './img/diamonds-3.png'
    },
    {
        suit: 'diamonds',
        value: 2,
        image: './img/diamonds-2.png'
    },

    {
        suit: 'spades',
        value: 11,
        image: './img/spades-A.png'
    },
    {
        suit: 'spades',
        value: 10,
        image: './img/spades-K.png'
    },
    {
        suit: 'spades',
        value: 10,
        image: './img/spades-Q.png'
    },
    {
        suit: 'spades',
        value: 10,
        image: './img/spades-J.png'
    },
    {
        suit: 'spades',
        value: 10,
        image: './img/spades-10.png'
    },
    {
        suit: 'spades',
        value: 9,
        image: './img/spades-9.png'
    },
    {
        suit: 'spades',
        value: 8,
        image: './img/spades-8.png'
    },
    {
        suit: 'spades',
        value: 7,
        image: './img/spades-7.png'
    },
    {
        suit: 'spades',
        value: 6,
        image: './img/spades-6.png'
    },
    {
        suit: 'spades',
        value: 5,
        image: './img/spades-5.png'
    },
    {
        suit: 'spades',
        value: 4,
        image: './img/spades-4.png'
    },
    {
        suit: 'spades',
        value: 3,
        image: './img/spades-3.png'
    },
    {
        suit: 'spades',
        value: 2,
        image: './img/spades-2.png'
    },

    {
        suit: 'hearts',
        value: 11,
        image: './img/hearts-A.png'
    },
    {
        suit: 'hearts',
        value: 10,
        image: './img/hearts-K.png'
    },
    {
        suit: 'hearts',
        value: 10,
        image: './img/hearts-Q.png'
    },
    {
        suit: 'hearts',
        value: 10,
        image: './img/hearts-J.png'
    },
    {
        suit: 'hearts',
        value: 10,
        image: './img/hearts-10.png'
    },
    {
        suit: 'hearts',
        value: 9,
        image: './img/hearts-9.png'
    },
    {
        suit: 'hearts',
        value: 8,
        image: './img/hearts-8.png'
    },
    {
        suit: 'hearts',
        value: 7,
        image: './img/hearts-7.png'
    },
    {
        suit: 'hearts',
        value: 6,
        image: './img/hearts-6.png'
    },
    {
        suit: 'hearts',
        value: 5,
        image: './img/hearts-5.png'
    },
    {
        suit: 'hearts',
        value: 4,
        image: './img/hearts-4.png'
    },
    {
        suit: 'hearts',
        value: 3,
        image: './img/hearts-3.png'
    },
    {
        suit: 'hearts',
        value: 2,
        image: './img/hearts-2.png'
    },

]


let totalScorePlayer = 0;
let totalScoreDealer = 0;

// Funktion för att uppdatera poäng för spelare och dealer
function scoreUpdate(card, isPlayer) {
    if (isPlayer) {
        totalScorePlayer += card.value;
        console.log("Spelarens totala poäng: ", totalScorePlayer);
    } else {
        totalScoreDealer += card.value;
        console.log("Dealerns totala poäng: ", totalScoreDealer);
    }
}

// Funktion för att dra ett slumpmässigt kort för spelare eller dealer
function getRandomCard(isPlayer) {
    let randomNumber = Math.floor(Math.random() * 52);
    const card = cardDeck[randomNumber];

    // Uppdaterar HTML för spelare eller dealer beroende på vem som drar kortet
    const playerHtmlEl = document.querySelector(isPlayer ? ".card-container-player" : ".card-container-dealer");
    playerHtmlEl.innerHTML += `
        <img src="/img/${card.suit}-${card.value}.png">`;

    scoreUpdate(card, isPlayer); // Uppdaterar poängen baserat på vem som drog kortet
    blackjack(); // Kollar om någon har vunnit eller förlorat
}

// Funktion för att starta spel för spelaren
function player() {
    getRandomCard(true);  // Spelaren drar sitt första kort
    getRandomCard(true);  // Spelaren drar sitt andra kort
}

// Funktion för att starta spel för dealern
function computer() {
    getRandomCard(false);  // Dealern drar sitt första kort
    getRandomCard(false);  // Dealern drar sitt andra kort
}

// Kollar blackjack-reglerna
function blackjack() {
    if (totalScorePlayer === 21) {
        console.log('Blackjack! Spelaren vinner!');
    } else if (totalScorePlayer > 21) {
        console.log('Spelaren har förlorat!');
    }

    if (totalScoreDealer === 21) {
        console.log('Blackjack! Dealern vinner!');
    } else if (totalScoreDealer > 21) {
        console.log('Dealern har förlorat!');
    }
}

// EventListeners för att välja mellan att fortsätta eller stanna
document.getElementById('continue-btn').addEventListener('click', function() {
    getRandomCard(true); // Spelaren drar ett extra kort
    console.log('Du valde att fortsätta. Lycka till!');
});

document.getElementById('stay-btn').addEventListener('click', function() {
    console.log('Du valde att stanna. Låt oss se resultatet!');
    // Här kan du implementera dealerns tur om spelaren väljer att stanna
});

// Startar spelet
player();
computer();
