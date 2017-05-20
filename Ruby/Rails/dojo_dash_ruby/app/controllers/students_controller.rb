class StudentsController < ApplicationController
  def index
    @dojo = Dojo.find(params[:id])
    @students = Student.where(dojo:@dojo) 
  end

  def new
    @dojo = Dojo.find(params[:id]) 
    @dojos = Dojo.all   
  end

  def create
    dojo = Dojo.find(params[:dojo])
    student = Student.create(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], dojo: dojo)
    redirect_to '/dojos/'+ params[:dojo] + '/students'
  end

  def show
    @student = Student.find(params[:id])
  end

  def edit
    @student = Student.find(params[:id])
    @dojos = Dojo.all
  end

  def update
    dojo = Dojo.find(params[:dojo])
    student = Student.find(params[:id])
    student.update(first_name: params[:first_name], last_name: params[:last_name], email:params[:email], dojo: dojo)
    student.save
    redirect_to '/dojos'
  end

  def destroy
    student = Student.find(params[:id])
    student.destroy
    redirect_to :back
  end

end
