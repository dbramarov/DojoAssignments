#Use for loop to print count if mod 2 doesnt equal 0
for count in range (1, 1000):
	if count % 2 != 0:
		print count
#Use for loop to print multiples of 5 up until 1,000,000
for mult in range (5, 1000000):
	if mult % 5 == 0:
		print mult
#Prints the sum of all the values in the list
a = [1,2,5,10,255,3]
sum = 0
for element in a:
	sum+=element
print sum
#Prints the average of the values in the list
a = [1,2,5,10,255,3]
total = 0
for element in a:
	total += element
avg = total/len(a)
print avg 