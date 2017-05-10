a = {first_name: "Michael", last_name: "Choi"}
b = {first_name: "John", last_name: "Doe"}
c = {first_name: "Jane", last_name: "Doe"}
d = {first_name: "James", last_name: "Smith"}
e = {first_name: "Jennifer", last_name: "Smith"}
names = [a, b, c, d, e]

def x(arr)
	puts "You have #{arr.length} names in the 'names' array"
	for i in 0...arr.length
		p "The name is '#{arr[i][:first_name]} #{arr[i][:last_name]}'"
	end
end
x(names)