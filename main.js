const hands = [...document.querySelectorAll('.hands img')];
const play = document.querySelector('button');

const choices = {
    player: '',
    ai: '',
};

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