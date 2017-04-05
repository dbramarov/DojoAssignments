function DeckConstructor(){
	var suits = ["Heart", "Diamond", "Club", "Spade"];
	var values = ["Ace", "2", "3", "4", "5","6", "7", "8", "9", "10", "Jack", "Queen", "King"];
	var deck = [];

	var createDeck = function(){
		deck = [];
		for(var i = 0; i<suits.length; i++){
			for(var x = 0; x<values.length; x++){
				var card = {};
				card.suits = suits[i];
				card.values = values[x];
				deck.push(card);
			}
		}
		return this;		
	}
	createDeck();

	this.showDeck = function(){
		console.log(deck);
		console.log('Deck Length: ', deck.length);
	}

	this.shuffle = function(){
		var numberOfShuffles = Math.floor((Math.random() * 100) + 50);
		for (var i = 0; i< numberOfShuffles; i++){
			var randomInt1 = Math.floor(Math.random() * deck.length);
			var randomInt2 = Math.floor(Math.random() * deck.length);
			var temp = deck[randomInt1];
			deck[randomInt1] = deck[randomInt2];
			deck[randomInt2] = temp;
		}
		return this;
	}

	this.reset = createDeck;

	this.deal = function(){
		return deck.pop();
	}
}

function PlayerConstructor(name){
	this.name = name;
	this.hand = [];
}

PlayerConstructor.prototype.takeCard = function(deck){
	var card = deck.deal(); 
	this.hand.push(card);
	return this;
}

var myDeck = new DeckConstructor();
myDeck.shuffle();
var player = new PlayerConstructor('D$');
player.takeCard(myDeck).takeCard(myDeck);
myDeck.showDeck();
console.log(player.hand);