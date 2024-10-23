
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

function decideAceValue(card) {
    if(card[value] === 11) {
        const aceValue = prompt('Vill du att värdet på ditt ess ska vara [1] eller [11]?')
        switch (aceValue) {
            case '1':
                card[value] = aceValue  
                break;
            case '11':
                card[value] = aceValue  
                break;
            default:
                prompt('Vill du att värdet på ditt ess ska vara [1] eller [11]?')
                break;
        }
    }    
    return aceValue
}

function displayScores(newValueDealer, newValuePlayer) {
    const totalvalueDealer =+ newValueDealer
    const totalvaluePlayer =+ newValuePlayer


}


