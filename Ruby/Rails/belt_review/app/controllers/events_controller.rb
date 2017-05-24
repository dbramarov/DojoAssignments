class EventsController < ApplicationController
	before_action :require_login
  def index
  	@user = User.find(session[:user_id])
  	@events = Event.all
  	@attendings = Attending.where(user_id: session[:user_id])
  	puts @attendings
  end
  def new
  	user = User.find(session[:user_id])
  	@event = Event.create(name: params[:name], date: params[:date], city: params[:city], state: params[:state], user: user)
  	if @event.valid? 
  		redirect_to "/events"
  	else
  		flash[:errors] = @event.errors.full_messages
  		redirect_to :back
  	end
  end
  def show
  	@event = Event.find(params[:id])
  	@comments = Comment.all
  	@attendings = Attending.where(event_id: params[:id])
  end
  def edit
  	@event = Event.find(params[:id])
  end
  def update
  	@event = Event.find(params[:id])
  	if @event.update_attributes(name: params[:name], date: params[:date], city: params[:city], state: params[:state])
  		redirect_to "/events"
  	else
  		flash[:errors] = @user.errors.full_messages
  		redirect_to :back
  	end
  end
  def join 
  	event = Event.find(params[:id])
  	user = User.find(session[:user_id])
  	Attending.create(user: user, event: event)
  	redirect_to :back
  end
  def cancel 
  	Attending.find_by(user_id: session[:user_id], event_id: params[:id]).destroy
  	redirect_to :back
  end
  def delete
  	Event.find(params[:id]).destroy
  	redirect_to :back
  end
end
