#Print 1-255
def one_255
	for i in 1..255
		puts i
	end
end
one_255

#Print odd numbers between 1-255
def odd 
	i = 1
	while i <= 255
		puts i if i%2!=0
		i+=1
	end
end
odd

#Print Sum
def print_sum
	numm = 0
	for i in 0..255
		numm += i
		puts "New Number: #{i} Sum: #{numm}"
	end
end
print_sum

#Iterating through an array
x = [1,3,5,7,9,13]
def iterate_Arr(arr)
	arr.each {|arr| puts arr}
end
iterate_Arr(x)

#Find Max
x = [1,3,5,300,9,13]
def find_max(arr)
	max = arr[0]
	arr.each {|arr| max = arr if arr > max}
	puts max
end
find_max(x)

#Get Average 
x = [3,10]
def average(arr)
	sum = 0
	arr.each {|arr| sum += arr}
	avg = sum.to_f/arr.length.to_f
	puts avg
end
average(x)

#Array with Odd Numbers
def odd_num
	y = []
	for i in 0..255
		y.push i if i%2!=0
	end
	print y
end
odd_num

#Greater Than Y
x = [1,3,5,6,9,13]
def greater_than(arr,num)
	count = 0
	arr.each {|arr| count += 1 if arr>num}
	puts count 
end
greater_than(x, 3)

#Square the values
x = [1,5,10,-2]
def square(arr)
	for i in 0...arr.length
		arr[i] = arr[i]*arr[i]
	end
	print arr
end
square(x)

#Eliminate Negative Numbers
x = [1,5,-10,-2]
def neg_elim(arr)
	for i in 0...arr.length
		arr[i] = 0 if arr[i]<0
	end
	print arr
end
neg_elim(x)

#Max, Min, and Average
x = [1,5,-10,-2]
def max_min_avg(arr)
	sum = 0
	arr.each {|arr| sum += arr}
	avg = sum.to_f/arr.length.to_f
	puts avg
	puts arr.max
	puts arr.min
end
max_min_avg(x)

#Shifting the Values in the Array
x = [1, 5, 10, 7, -2]
def shift(arr)
	for i in 0...arr.length
		arr[i] = arr[i+1]
		if arr[i] == nil
			arr[i] = 0
		end
	end
	print arr
end
shift(x)

#Number to String
x = [1,-5,10,-2]
def num_string(arr)
	for i in 0...arr.length
		arr[i] = "Dojo" if arr[i]<0
	end
	print arr
end
num_string(x)
