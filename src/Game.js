import cardsGenerator from "./cardsGenerator";

export default class Game{
    constructor(players){
        this.players = players;
        this.activePlayer = players[0];
        this.cards = cardsGenerator();
    }

    nextPlayer(){
        this.activePlayer = this.players[this.players.indexOf(this.activePlayer) + 1];
    }

    giveCard(){
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        const randomCard = this.cards[randomIndex];
        if(this.activePlayer.takeCard(randomCard)){
            this.nextPlayer();
        }
        this.cards.splice(randomIndex, 1);
        console.log(this)
    }
}

