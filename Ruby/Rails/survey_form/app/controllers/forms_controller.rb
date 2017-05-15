class FormsController < ApplicationController
  def index
  	session[:views] ||= 0
  end
  def form_sub
  	session[:views] = session[:views] + 1

  	session[:result] = params[:form]

  	flash[:success] = "Thanks for submitting this form! You have submitted this form #{ session[:views] } time(s) now."

  	redirect_to '/forms/result'
  end
  def result
  	@result = session[:result]
  end
end
