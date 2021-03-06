import random
class Deck(object):
	def __init__(self):
		self.deck = []

	def createDeck(self):
		suits = ["Heart", "Diamond", "Club", "Spade"]
		values = ["Ace", "2", "3", "4", "5","6", "7", "8", "9", "10", "Jack", "Queen", "King"]
		for suit in suits:
			for val in values:
				card = Card(suit, val)
				self.deck.append(card)

		#print self.deck
		#return self.deck 

	def shuffle(self):
		random.shuffle(self.deck)

		#print self.deck
		#return self.deck 

	def dealCards(self):
		val1 = self.deck.pop(0)
		val2 = self.deck.pop(1)
		pairs = (val1, val2)
		print pairs
		return pairs

	def resetDeck(self):
		self.deck = []
		self.createDeck()
		print self.deck
		return self.deck 

class Card(object):
	def __init__(self,suit,value):
		self.suit = suit
		self.value = value

	def __repr__(self):
		return "Card(Suit %r, Value %r)" % (self.suit, self.value)

deck1 = Deck()

deck1.createDeck()

deck1.shuffle()

deck1.dealCards()

deck1.resetDeck()