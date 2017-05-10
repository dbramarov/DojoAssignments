x = (1..100)

puts "Yes it contains 3!" if x.include? 3

puts "The last number in the array is "+x.last.to_s
puts "The maximum number in the array is "+x.max.to_s
puts "The minimum number in the array is "+x.min.to_s

puts x.to_a.shuffle.to_s