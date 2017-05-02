class WidgetsController < ApplicationController
	
	# GET /users
  def index
		widgets = Widget.all
		render json: widgets
  end

  # GET /users/1
  def show
		widget = Widget.find(params[:id])
		render json: widget
	end

end
