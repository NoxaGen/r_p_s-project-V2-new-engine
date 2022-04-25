const hands = [...document.querySelectorAll('.hands img')];
const play = document.querySelector('button');

const battle = {
    playerChoice: '',
    aiChoice: '',
};

const summary = {
    games: 0,
    wins: 0,
    loses: 0,
    draws: 0,
};

//Funkcja odpowiadająca za wybór gracza, podświetlenie wyboru oraz przekazanie informacji do obiektu

function playerHand() {

    hands.forEach(hand => {
        hand.addEventListener('click', function () {
            hand.style.boxShadow = "";
            console.log(this.dataset.option);

            hands.forEach(hand => {
                hand.style.boxShadow = "";
            })
            this.style.boxShadow = "0 8px 2px -4px red";
            battle.playerChoice = this.dataset.option;
        })
    });
}

//Funkcja sterująca programem w której umieszczone będą pokolei wszystkie funkcje

playerHand()

function gameEngine() {
    playerHand()
}