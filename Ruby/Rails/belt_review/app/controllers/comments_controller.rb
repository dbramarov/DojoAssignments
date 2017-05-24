class CommentsController < ApplicationController
    before_action :require_login
  def new
  	@event = Event.find(params[:id])
  	user = User.find(session[:user_id])
  	@comment = Comment.create(content: params[:content], user: user, event: @event)
    if @comment.valid? 
  		redirect_to "/events/#{@event.id}"
  	else
  		flash[:errors] = @event.errors.full_messages
  		redirect_to :back
  	end
  end
end
