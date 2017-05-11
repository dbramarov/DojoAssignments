require_relative 'project'
RSpec.describe Project do
  before(:each) do
    # updated this block to create two projects
    @project1 = Project.new('Project 1', 'description 1', 'Dorian')
    @project2 = Project.new('Project 2', 'description 2', 'Poop')
  end

  it 'has a method elevator_pitcendh to explain name and description' do
    expect(@project1.elevator_pitch).to eq("Project 1, description 1")
    expect(@project2.elevator_pitch).to eq("Project 2, description 2")
  end

  it 'has a getter and setter for name attribute' do
  	expect(@project2.owner).to eq("Poop")
  end

  it 'has add task' do
  	@project1.add_task("Poop")
  	@project1.add_task("Book")
  	expect(@project1.get_task).to eq(['Poop','Book'])
  end
end
