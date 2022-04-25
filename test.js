const hands = [...document.querySelectorAll('.hands img')];
const play = document.querySelector('button');

const battle = {
    playerChoice: '',
    aiChoice: '',
    result: ''
};

const summary = {
    games: 0,
    wins: 0,
    loses: 0,
    draws: 0
};

//Funkcja odpowiadająca za wybór gracza, podświetlenie wyboru oraz przekazanie informacji do obiektu

function playerHand() {

    hands.forEach(hand => {
        hand.addEventListener('click', function () {
            hand.style.boxShadow = "";
            console.log('wybór gracza:' + this.dataset.option);

            hands.forEach(hand => {
                hand.style.boxShadow = "";
            })
            this.style.boxShadow = "0 8px 2px -4px red";
            battle.playerChoice = this.dataset.option;
        })
    });
}

// Funkcja która losowo generuje wybór AI i przekazuje go do obiektu

function aiHand() {
    const ai = hands[Math.floor(Math.random() * 3)].dataset.option;
    battle.aiChoice = ai;
    console.log('wybór AI:' + ai)
}

// Funkcja która porównuje wybór gracza z wyborem AI i zwraca wynik w formie stringa

function checkResult(player, ai) {
    if ((player === 'rock' && ai === 'rock') || (player === 'paper' && ai === 'paper') || (player === 'scissors' && ai === 'scissors')) {
        return 'draw';
    } else if ((player === 'rock' && ai === 'paper') || (player === 'paper' && ai === 'scissors') || (player === 'scissors' && ai === 'rock')) {
        return 'loss';
    } else {
        return 'win';
    }
}


//Funkcja sterująca programem w której umieszczone będą pokolei wszystkie funkcje




function gameEngine() {
    playerHand()
    aiHand()

    battle.result = checkResult(battle.playerChoice, battle.aiChoice)
    console.log(battle.result)

}

gameEngine()