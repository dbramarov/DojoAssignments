
str = "If monkeys like bananas, then I must be a monkey!"

print str.find('monkey')

newstr = str.replace('monkey', 'alligator',1)

print newstr

x = [2, 54, -2, 7, 12, 98]

print max(x)
print min(x)

y = ['hello', 2, 54, -2, 7, 12, 98, "world"]

print y[0], y[7]

newy = y.pop(0), y.pop()

print newy

z = [19,2,54,-2,7,12,98,32,10,-3,6]

z.sort()

print z

newzfirst = z[0:5]
newzlast = z[5:11]

newzlast.insert(0, newzfirst)

print newzlast

