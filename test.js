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

};