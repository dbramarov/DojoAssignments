class SecretsController < ApplicationController
  def index
  	@user = User.find(session[:user_id])
  	@secrets = Secret.where(user: @user)
  end
  def create 
  	user = User.find(session[:user_id])
  	Secret.create(content: params[:secret], user: user)
  	redirect_to "/users/#{user.id}"
  end
  def all
  	@secrets = Secret.all
  end
  def delete
  	Secret.find(params[:id]).destroy
  	redirect_to :back
  end
end
