class Project

  attr_accessor :name, :description, :owner, :task

  def initialize name, description, owner
    @name = name
    @description = description
    @owner = owner
    @task = []
  end

  def elevator_pitch
  	 "#{@name}, #{@description}"
  end

  def add_task(task)
  	@task.push(task)
  end

  def get_task
  	for i in @task
  		puts i 
  	end
  end

end

