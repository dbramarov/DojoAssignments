#Prints stars by each number in list
def draw_stars(arr):
	for x in arr:
		star = "*"*x
		print star

draw_stars([4,6,1,3,5,7,25])


#Prints Stars by integers and takes the lowercase first letter of strings and multiplys by length of string.
def draw_stars(arr):
	for x in arr:
		if type(x) == int:
			star = "*"*x
			print star
		else:
			x = x.lower()
			x = x[0]*len(x)
			print x

draw_stars([4,"Tom",1,"Michael",5,7,"Jimmy Smith"])
