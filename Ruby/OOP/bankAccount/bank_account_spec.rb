require_relative 'bank_account'
RSpec.describe BankAccount do
  before(:each) do
    @account1 = BankAccount.new
  end

  it 'has a getter for checking account' do
  	expect(@account1.get_check).to eq("Checking balance: 100")
  end

  it 'has a function that allows the user to withdraw cash' do
  	expect(@account1.withdraw(10,10)).to eq(90)
  end

  it 'error if a user tries to withdraw more money than they have in the account' do
  	expect(@account1.withdraw(200,200)).to eq("insufficient funds")
  end

  it 'error when the user attempts to retrieve the total number of bank accounts' do
  	expect{@account1.number_of_accounts}.to raise_error(NoMethodError)
  end
 
  it 'error when the user attempts to set the interest rate' do
  	expect{@account1.interest_rate = 0.02}.to raise_error(NoMethodError)
  end


end