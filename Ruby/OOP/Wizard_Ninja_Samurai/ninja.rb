require_relative 'human'

class Ninja < Human 

	def initialize 
		super
		@stealth = 175
	end

	def steal(obj)
		@health +=10
		attack(obj)
		self
	end

	def attack(obj)
		super
		self
	end
	def get_away
		@health -=15
		self
	end
end

ninja = Ninja.new
ninja2 = Ninja.new

ninja.steal(ninja2)
puts ninja2.health