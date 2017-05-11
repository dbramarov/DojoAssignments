require_relative 'apple'

RSpec.describe Apple do

  before(:each) do
    @tree = Apple.new
  end

  it 'have an age attribute with getter and setter methods' do
    @tree.age = 2
    expect(@tree.age).to eq(2)
  end

  it 'have a height attribute with only a getter method' do
    expect(@tree.height).to eq(10)
    expect{@tree.height = 1}.to raise_error(NoMethodError)
  end

  it 'have an apple count attribute with only a getter method' do
    expect(@tree.apple_count). to eq(0)
    expect{@tree.apple_count = 1}.to raise_error(NoMethodError)
  end

  it "year_gone_by adds one year to the age attribute" do
        @tree.year_gone_by
        expect(@tree.age).to eq(1)
  end

  it "year_gone_by increases the height by 10 percent of it's current height" do
        @tree.year_gone_by
        expect(@tree.height).to eq(11)
  end

  it "year_gone_by increases apple count by 2 if age is less than 4 and greater than 10" do
        @tree.year_gone_by
        expect(@tree.apple_count).to eq(0)
        15.times {@tree.year_gone_by}
        expect(@tree.apple_count).to eq(14)
  end

  it "year_gone_by increases apple count by 2 if age is between 4 and 10" do
        4.times {@tree.year_gone_by}
        expect(@tree.apple_count).to eq(2)
  end

  it "should have a method called pick_apples that takes all of the apples off the tree" do
      expect(@tree.pick_apples).to eq(0)
  end

end
