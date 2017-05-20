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
  def destroy
  	session.clear
  	redirect_to '/sessions/new'
  end
end
