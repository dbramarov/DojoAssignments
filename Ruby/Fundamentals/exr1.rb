# # x = 5
# # y = 10
# # z = x+y

# # puts z 

# firstName = 'Dorian'
# lastName = 'Bramarov'

# puts "Your name is #{firstName} and last name is #{lastName}"

# puts "Your name is %s and last name is %s" % [firstName, lastName]

# i = 0
# num = 5
# while i < num do
#   puts "Inside the loop i = #{i}"
#   i += 1  
#   # break if i == 2  
# end

for i in 0..5 
  next if i == 2
  puts "Value of local variable is #{i}"   
end