const hands = [...document.querySelectorAll('.hands img')];
const play = document.querySelector('button');

const battle = {
    playerChoice: '',
    aiChoice: '',
    result: '',
};

const summary = {
    games: 0,
    wins: 0,
    loses: 0,
    draws: 0,
};

// function checking players choice
function playerHand() {
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 10px 5px -5px black';
    battle.playerChoice = this.dataset.option;
    document.querySelector('[data-result="choice"]').textContent = battle.playerChoice;
    console.log(battle.playerChoice);
};

hands.forEach(hand => hand.addEventListener('click', playerHand));

// function randomize ai choice
function aiHand() {
    const result = hands[Math.floor(Math.random() * 3)].dataset.option;
    battle.aiChoice = result;
    document.querySelector('[data-result="ai-choice"]').textContent = battle.aiChoice;
    return result;
}

//function starts game after play button and check booleon is true
function startGame() {
    if (!battle.playerChoice) {
        alert('Wybierz jedną z opcji!')
        return;
    }
    console.log('Game is starting')
    aiHand();
    // battle.playerChoice = '';
    hands.forEach(hand => hand.style.boxShadow = '');
    summary.games = summary.games + 1;
    document.querySelector('[data-summary="games"]').textContent = summary.games;
}

play.addEventListener('click', startGame);

// function wich comparing choice of ai vs player
function showWinner(player, ai) {
    if (player === ai) {
        return 'draw';
    } else if ((player === "papier" && ai === "kamień") ||
        (player === "kamień" && ai === "nożyczki") ||
        (player === "nożyczki" && ai === "papier")) {
        return 'win';
    } else {
        return 'loss';
    }
};

//function taking 3 arguments and publish final result and update score board
function publishResult(player, ai, result) {
    player = battle.playerChoice;
    ai = battle.aiChoice;
    result = showWinner(player, ai);

    if (result === 'win') {
        summary.wins = +summary.wins;
        document.querySelector('[data-summary="wins"]').textContent = summary.wins;
        document.querySelector('[data-result="battle-result"]').textContent = "Wygrywasz, gratulacje :)";
        document.querySelector('[data-result="battle-result"]').style.color = "green";
    } else if (result === 'loss') {
        summary.loses = +summary.loses;
        document.querySelector('[data-summary="loses"]').textContent = summary.loses;
        document.querySelector('[data-result="battle-result"]').textContent = "Przykro mi, przegrywasz :("
        document.querySelector('[data-result="battle-result"]').style.color = "red";
    } else {
        summary.draws = +summary.draws;
        document.querySelector('[data-summary="draws"]').textContent = summary.draws;
        document.querySelector('[data-result="battle-result"]').textContent = "Macie remis z AI!"
        document.querySelector('[data-result="battle-result"]').style.color = "blue";

    }

}


function endGame() {
    battle.playerChoice = '';
    battle.aiChoice = '';
    document.querySelector('[data-result="battle-result"]').textContent = ''
    const finalResult = showWinner();
    publishResult(battle.playerChoice, battle.aiChoice, finalResult)

};

endGame()