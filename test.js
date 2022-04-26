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

function playerHand(e) {
    battle.playerChoice = e.target.dataset.option;

    hands.forEach(hand => {
        hand.style.boxShadow = ''
    })
    e.target.style.boxShadow = "0 8px 2px -4px red";
}


hands.forEach(hand => addEventListener('click', playerHand))

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

//Funkcja która potrzebuje trzech argumentów, pobiera je z obiektu i publikuje wyniki

function publishResult(player, ai, result) {
    summary.games++;
    const playerChoice = document.querySelector('[data-result="choice"]');
    const computerChoice = document.querySelector('[data-result="ai-choice"]');
    const battleResult = document.querySelector('[data-result="battle-result"]');


    //player
    if (player === 'rock') {
        playerChoice.textContent = "Kamień";
    } else if (player === 'paper') {
        playerChoice.textContent = "Papier";
    } else {
        playerChoice.textContent = "Nożyczki";
    }

    //ai

    if (ai === 'rock') {
        computerChoice.textContent = "Kamień";
    } else if (ai === 'paper') {
        computerChoice.textContent = "Papier";
    } else {
        computerChoice.textContent = "Nożyczki"
    }

    //battle result + summary

    if (result === 'win') {
        battleResult.textContent = "Ty wygrywasz! :)", battleResult.style.color = "green";
        summary.wins++;
    } else if (result === 'loss') {
        battleResult.textContent = "Przegrywasz :(", battleResult.style.color = "red";
        summary.loses++;
    } else {
        battleResult.textContent = "Remisujecie :/", battleResult.style.color = "gray";
        summary.draws++;
    }

    //scoreboard 

    document.querySelector('[data-summary="games"]').textContent = summary.games;
    document.querySelector('[data-summary="wins"]').textContent = summary.wins;
    document.querySelector('[data-summary="loses"]').textContent = summary.loses;
    document.querySelector('[data-summary="draws"]').textContent = summary.draws;

}

//Funkcja sterująca programem w której umieszczone będą pokolei wszystkie funkcje




function gameEngine() {
    // playerHand()
    aiHand()

    battle.result = checkResult(battle.playerChoice, battle.aiChoice)
    console.log(battle.result)
    publishResult(battle.playerChoice, battle.aiChoice, battle.result);

}

gameEngine()