import random
randomNum = random.randint(60, 100)
randomNum = int(randomNum)+1
#print randomNum


def scores():
	for count in range(0,10):
		randomNum = random.randint(60, 100)
		randomNum = int(randomNum)+1
		
		if randomNum>59 and randomNum<70:
			print "Score: "+str(randomNum)+"; Your grade is D"
		if randomNum>=70 and randomNum<80:
			print "Score: "+str(randomNum)+"; Your grade is C"
		if randomNum>=80 and randomNum<90:
			print "Score: "+str(randomNum)+"; Your grade is B"
		if randomNum>=90 and randomNum<101:
			print "Score: "+str(randomNum)+"; Your grade is A"
		
scores()

	
	