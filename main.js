const hands = [...document.querySelectorAll('.hands img')];
const play = document.querySelector('button');

const battle = {
    playerChoice: '',
    aiChoice: '',
    winner: '',
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
    battle.playerChoice = '';
    hands.forEach(hand => hand.style.boxShadow = '');
    summary.games = summary.games + 1;
    document.querySelector('[data-summary="games"]').textContent = summary.games;
}

play.addEventListener('click', startGame);

function publishResult(player, ai) {

}