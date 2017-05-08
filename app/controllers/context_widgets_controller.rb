class ContextWidgetsController < ApplicationController

	# GET /context_widgets/position/1.json
  def get_position
    
  end

  # GET /context_widgets/context/1.json
  def get_context
    
  end

  # GET /context_widgets/context/1.json
  def get_widget
    
  end

  # setWidget
  # PATCH/PUT /context_widgets/1
  # PATCH/PUT /context_widgets/1.json
  def update
    respond_to do |format|
      if context_widget.update(params)
        format.json { render :show, status: :ok, location: context_widget }
      else
        format.json { render json: context_widget.errors, status: :unprocessable_entity }
      end
    end
  end

end