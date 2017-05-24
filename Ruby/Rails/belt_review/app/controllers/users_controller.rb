class UsersController < ApplicationController
	before_action :require_login, except: [:index, :login, :register]
  def index
  end

  def login
  	@user = User.find_by(email: params[:Email]).try(:authenticate, params[:Password])
  	if @user
  		session[:user_id] = @user.id
  		redirect_to "/events"
  	else 
  		flash[:errors] = ["Invalid Combination"]
  		redirect_to :back
  	end  	
  end

  def register
  	@user = User.create(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], city: params[:city], state: params[:state], password: params[:password], password_confirmation: params[:password_confirmation])
  	if @user.valid? 
   		session[:user_id] = @user.id
  		redirect_to "/events"
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
  	if @user.update_attributes(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], city: params[:city], state: params[:state])
  		redirect_to "/events"
  	else
  		flash[:errors] = @user.errors.full_messages
  		redirect_to :back
  	end
  end
  def logout
  	session.clear
  	redirect_to '/'
  end
end
