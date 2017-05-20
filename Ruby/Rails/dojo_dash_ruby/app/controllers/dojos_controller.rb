class DojosController < ApplicationController
  def index
  	@dojos = Dojo.all 
  end
  def new
  end
  def create 
  	@dojo = Dojo.create(user_params)
    if(@dojo.update(user_params))
      redirect_to '/dojos'
    else
  	  flash[:errors] = @dojo.errors.full_messages
      redirect_to :back
    end
  end
  def show
  	@dojo = Dojo.find(params[:id])
  end
  def edit
  	@dojo = Dojo.find(params[:id])
  end
  def update
  	dojo = Dojo.find(params[:id])
  	dojo.update(user_params)
  	dojo.save
  	redirect_to '/dojos'
  end
  def destroy
  	dojo = Dojo.find(params[:id])
  	dojo.destroy
  	redirect_to '/dojos'
  end

   private
    def user_params
      params.require(:dojo).permit(:branch, :street, :city, :state)
    end
end
