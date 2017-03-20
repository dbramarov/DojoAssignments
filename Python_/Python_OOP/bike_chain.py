class Bike(object):
	def __init__(self, price, max_speed):
		self.price = price
		self.max_speed = max_speed
		self.miles = 0

	def displayinfo(self):
		print self.price
		print self.max_speed
		print self.miles
		return self

	def ride(self):
		print "Riding"
		self.miles = self.miles + 10
		return self

	def reverse(self):
		print "Reverse"
		if self.miles <= 0:
			pass
		else:
			self.miles = self.miles - 5
		return self

bike1 = Bike(200,"25mph") 
bike2 = Bike(100, "10mph")
bike3 = Bike(500, "70mph")

bike1.ride().ride().ride().reverse().displayinfo()

bike2.ride().ride().reverse().reverse().displayinfo()

bike3.reverse().reverse().reverse().displayinfo()
'''
bike1.ride()
bike1.ride()
bike1.ride()
bike1.reverse()
bike1.displayinfo()

bike2.ride()
bike2.ride()
bike2.reverse()
bike2.reverse()
bike2.displayinfo()

bike3.reverse()
bike3.reverse()
bike3.reverse()
bike3.displayinfo()
'''
