def odd_even():
	for count in range (1, 2000):
		if count % 2 != 0:
			print "Number is "+str(count)+". "+"This is an odd number."
		else:
			print "Number is "+str(count)+". "+"This is an even number."

odd_even()

def multiply(a, c):
	b = []
	for element in a:
		b.append(element*c)
	print b 

multiply([5,4,10,16],5)


