require_relative 'human'

class Samurai < Human

	@@num_samurai = 0
	def initialize  
		super
		@@num_samurai +=1
		@health = 200
	end
	def death_blow(obj)
		obj.health = 0
		self
	end
	def meditate
		@health = 200
		self
	end
	def self.how_many
		puts @@num_samurai
	end
end

samurai = Samurai.new
samurai2 = Samurai.new
puts samurai.health
Samurai.how_many
