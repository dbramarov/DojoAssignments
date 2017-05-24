class SecretsController < ApplicationController
	before_action :require_login
  def index
  	@user = User.find(session[:user_id])
  	@secrets = Secret.where(user: @user)
  	@allSecrets = Secret.all
  end
  def create 
  	user = User.find(session[:user_id])
  	Secret.create(content: params[:secret], user: user)
  	redirect_to "/users/#{user.id}"
  end
  def all
  	@secrets = Secret.all
  	@likes = Like.all
  	@user = User.find(session[:user_id])

  end
  def delete
  	Secret.find(params[:id]).destroy
  	redirect_to :back
  end
end
