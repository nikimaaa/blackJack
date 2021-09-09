import Game from './Game'
import Card from './Card'
import Player from './Player'
import './style.scss'

let Player1 = new Player("Nikita");
let Player2 = new Player("Another");

const game = new Game([Player1, Player2]);
console.log(game)
 
const takeButton = document.querySelector('button');
// const skipButton = document.querySelector();

takeButton.addEventListener('click', () => {
    game.giveCard();
})





