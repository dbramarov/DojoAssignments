x = [3,5,1,2,7,9,8,13,25,32]
def one(arr)
	sum = 0
	for i in 0...arr.length
		sum += arr[i]
	end
	print arr.reject {|arr| arr<10}
	puts sum
end
one(x)

x = ["John", "KB", "Oliver", "Cory", "Matthew", "Christopher"]
def two(arr)
	arr.shuffle.each {|arr| puts arr}
	puts"***************************"
	puts arr.reject {|arr| arr.length<5}
end
two(x)

x = ("a".."z")
z = x.to_a
def three(arr)
	puts arr.shuffle.last
	first = arr.shuffle.first
	puts first 
	puts "Letter is a vowel" if first == "a" or "e" or "i" or "o" or "u"
end
three(z)

def four
	arr = []
		for i in 1..10
			arr.push rand(55..100)
		end
	p arr
end
four()

def five
	arr = []
		for i in 1..10
			arr.push rand(55..100)
		end
	print arr.sort!
	puts arr.max
	puts arr.min
end
five()

def six
	x = []
	for i in 1..5
    	x.push (65+rand(26)).chr
    end
    print x.join
    puts
end
six()

def seven
	arr = []
	for b in 1..10
		str = ""
		for i in 1..5
			str += (65+rand(26)).chr
		end
		arr.push str
	end
	p arr
end
seven()