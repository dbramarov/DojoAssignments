class SessionsController < ApplicationController
  def new
  end
  def login
  	@user = User.find_by(email: params[:Email]).try(:authenticate, params[:Password])
  	if @user
  		session[:user_id] = @user.id
  		redirect_to "/users/#{@user.id}"
  	else 
  		flash[:errors] = "Invalid Combination"
  		redirect_to :back
  	end
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
  def destroy
  	session.clear
  	redirect_to '/sessions/new'
  end
end
