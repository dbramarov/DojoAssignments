class UsersController < ApplicationController
  def login
  end

  def check
  	@user = User.find_by(email: params[:Email]).try(:authenticate, params[:Password])
  	if @user
  		session[:user_id] = @user.id
  		redirect_to "/users/#{@user.id}"
  	else 
  		flash[:error] = "Invalid Combination"
  		redirect_to :back
  	end
  end

  def register
  	@user = User.create(name: params[:Name], email: params[:Email], password: params[:Password], password_confirmation: params[:Password_Confirmation])
  	if @user.valid? 
   		session[:user_id] = @user.id
  		redirect_to "/users/#{@user.id}"
  	else
  		flash[:errors] = @user.errors.full_messages
  		redirect_to :back
  	end
  end
  def edit
  	@user = User.find(session[:user_id])
  end
  def update
  	@user = User.find(session[:user_id])

  	if @user.update_attributes(name: params[:Name], email: params[:Email])
  		redirect_to "/users/#{@user.id}"
  	else
  		flash[:errors] = @user.errors.full_messages
  		redirect_to :back
  	end
  end
  def delete
  	User.find(session[:user_id]).destroy
  	session.clear
  	redirect_to '/users/login'
  end
  def logout
  	session.clear
  	redirect_to '/users/login'
  end
end
