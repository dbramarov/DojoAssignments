class BankAccount 
	attr_reader :account_num, :checking, :savings

	@@bank_accounts = 0

	def initialize
    	@account_num = genNum
    	@@bank_accounts +=1
    	@checking = 100
    	@savings = 100
    	@interest_rate = 0.01
  end

  	def get_account
      "Your account number is #{@account_num}"
  	end

  	def get_check
  		"Checking balance: #{@checking}"
  	end

  	def get_savings
  		"Savings balance: #{@savings}"
  	end

  	def account_info
  		puts "Your account number is #{@account_num}"
  		puts "Checking balance: #{@checking}"
  		puts "Savings balance: #{@savings}"
  		puts "interest rate is #{@interest_rate}"
  		puts "Total account value:", @checking+@savings
  	end

  	def deposit(account, amount)
	    if account.downcase == "checking"
	      @checking += amount
	    else
	      @saving += amount 
	    end
  	end

  	def withdraw(check, save)
  		if @checking - check > 0
  			@checking -= check
  		else 
  			"insufficient funds"
  		end
  		if @savings - save > 0
  			@savings -= save
  		else
  			"insufficient funds"
  		end
  	end

  	def self.number_of_accounts
    	 @@bank_accounts
  	end

  	private 
  	def genNum
  		rand(100..200)
  	end
end


# doriansAccount = BankAccount.new
# # doriansAccount.get_account
# # doriansAccount.get_check
# # doriansAccount.get_savings
# # doriansAccount.deposit(10,0)
# # doriansAccount.get_check.get_savings
# # doriansAccount.withdraw(1000, 0).get_check.get_savings
# # doriansAccount.account_info
# doriansAccount.deposit("checking", 2000).account_info