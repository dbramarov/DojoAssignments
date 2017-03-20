class Animal(object):
	def __init__(self, name):
		self.name = name
		self.health = 100

	def walk(self):
		self.health -= 1
		return self

	def run(self):
		self.health -= 5
		return self

	def displayHealth(self):
		print self.name
		print self.health 

animal = Animal("Cat")

animal.walk().walk().walk().run().run().displayHealth()

class Dog(Animal):
	def __init__(self):
		super(Dog, self).__init__("Dog")
		self.health = 150

	def pet(self):
		self.health +=5
		return self

Dog = Dog()

Dog.walk().walk().walk().run().run().pet().displayHealth()

class Dragon(Animal):
	def __init__(self):
		super(Dragon, self).__init__("Dragon")
		self.health = 170
	
	def displayHealth(self):
		print "This is a Dragon!"
		print self.name
		print self.health
		
	def fly(self):
		self.health -=10
		return self

Dragon = Dragon()

Dragon.walk().walk().walk().run().run().fly().fly().displayHealth()