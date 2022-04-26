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

//Function responsible for players show choice and send it to the object
function playerHand() {
    battle.playerChoice = this.dataset.option;

    hands.forEach(hand => {
        hand.style.boxShadow = '';
    })
    this.style.boxShadow = "0 8px 2px -4px red";
}

// Function gives totaly random AI choice
function aiHand() {
    const ai = hands[Math.floor(Math.random() * 3)].dataset.option;
    battle.aiChoice = ai;
}

// Function compares two options and give answer value in string wich its send to object
function checkResult(player, ai) {
    if ((player === 'rock' && ai === 'rock') || (player === 'paper' && ai === 'paper') || (player === 'scissors' && ai === 'scissors')) {
        return 'draw';
    } else if ((player === 'rock' && ai === 'paper') || (player === 'paper' && ai === 'scissors') || (player === 'scissors' && ai === 'rock')) {
        return 'loss';
    } else {
        return 'win';
    }
}

//Function wich requies three arguments (two choices and result of play) then publish all results on scoreboard
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

// Function wich reset players choice in object and removing box shadows after game
function endGame() {
    battle.playerChoice = '';
    hands.forEach(hand => {
        hand.style.boxShadow = '';
    })
}

//Function is kind of control panel wich calls every other functions in steps
function gameEngine() {
    aiHand()
    if (!battle.playerChoice) {
        return alert('Musisz wybrać opcję!')
    }
    battle.result = checkResult(battle.playerChoice, battle.aiChoice)
    publishResult(battle.playerChoice, battle.aiChoice, battle.result);
    endGame()
}

// Event listeners set on hands and starting button
hands.forEach(hand => hand.addEventListener('click', playerHand));
play.addEventListener('click', gameEngine);