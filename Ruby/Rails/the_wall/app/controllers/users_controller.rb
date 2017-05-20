class UsersController < ApplicationController
  def login
  end

  def new
  	@user = User.find_by(name: params[:name])

  	if @user
  		session[:user_id] = @user.id
  		redirect_to '/messages'
  	else 
  		@user = User.create(name: params[:name])
  		if @user.valid? 
  			session[:user_id] = @user.id
  			redirect_to '/messages'
  		else
  			flash[:errors] = @user.errors.full_messages
  			redirect_to :back
  		end
  	end
  end

  def logout
  	session.clear
  	redirect_to '/users/new'
  end
end
