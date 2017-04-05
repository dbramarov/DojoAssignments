function Deck(){
	var deck = [];
	var suits = ["Heart", "Diamond", "Club", "Spade"];
	var values = ["Ace", "2", "3", "4", "5","6", "7", "8", "9", "10", "Jack", "Queen", "King"];

	this.createDeck = function(){

		for(var i = 0; i<suits.length; i++){
			for(var x = 0; x<values.length; x++){
				var card = `${suits[i]} ${values[x]}`
				deck.push(card) 
			}
		}
		return deck;
	}
	this.shuffle = function(array){
		var m = array.length, t, i;
  		while (m) {
    		i = Math.floor(Math.random() * m--);
    		t = array[m];
    		array[m] = array[i];
    		array[i] = t;
  		}
  		return array;
	}
	this.reset = function(){
		deck = [];
		this.createDeck();
		console.log(deck);
		return deck;
	}
	this.deal = function(){
		var deltCard = deck.pop();
		// console.log("Card Delt: " + deltCard);
		return this;
	}
}

var deck = new Deck();
var d = deck.createDeck();
deck.shuffle(d)


function Player(name){
	this.name = name;
	this.hand = [];

	this.takecard = function(){
		this.hand.push(deck.deal());
		console.log(this.hand);
		return this;
	}
}

var player1 = new Player('Dorian');

player1.takecard();


