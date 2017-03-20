class Car(object):
	def __init__(self, price, speed, fuel, mileage, tax=0.12):
		self.price = price
		self.speed = speed
		self.fuel = fuel
		self.mileage = mileage
		if price >= 10000:
			self.tax = 0.15
		else:	
			self.tax = tax

		self.display_all()

	def display_all(self):
		print "Price:", self.price
		print "Speed:", self.speed
		print "Fuel:", self.fuel
		print "Milage:", self.mileage
		print "Tax:", self.tax
		print ""

car1 = Car(2000, "35mph", "Full", "15mpg")
car2 = Car(3000, "5mph", "Empty", "65mpg")
car3 = Car(15000, "65mph", "Full", "45mpg")
car4 = Car(5000, "95mph", "Half-Full", "25mpg")
car5 = Car(6000, "55mph", "Full", "95mpg")
car6 = Car(10000, "235mph", "Low", "200mpg")

