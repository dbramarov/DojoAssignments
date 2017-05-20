class UsersController < ApplicationController
  def new
  end
  def create 
	@user = User.create(name: params[:Name], email: params[:Email], password: params[:Password], password_confirmation: params[:Password_Confirmation])
  		if @user.valid? 
   			session[:user_id] = @user.id
  			redirect_to "/users/#{@user.id}"
  		else
  			flash[:errors] = @user.errors.full_messages
  			redirect_to :back
  		end
  end
  def show
  	@user = User.find(session[:user_id])
  end

  def edit
  end
end
