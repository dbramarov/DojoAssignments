import random

def coinToss():
	headCount = 0
	tailCount = 0
	print "Starting the program..."
	for count in range(1,5001):
		randomNum = random.random()
		randomNum = round(randomNum)
		if randomNum == 0:
			tailCount+=1
			print "Attempt #" + str(count)+ ": Throwing a coin... It's a tail!... Got "+str(tailCount)+" tail(s) so far and "+str(headCount)+" head(s) so far"
		else: 
			headCount+=1
			print "Attempt #" + str(count)+ ": Throwing a coin... It's a Head!... Got "+str(tailCount)+" tail(s) so far and "+str(headCount)+" head(s) so far"
	print "Ending the program, Thank you!"	
coinToss()