class LabWidgetsController < ApplicationController

	# GET /lab_widgets
  def index
    lab_widgets = LabWidget.all
    render json: lab_widgets
  end

  # GET /lab_widgets/1
  def show
    lab_widget = LabWidget.find(params[:id])
    render json: lab_widget
  end

  # POST /lab_widgets
  # POST /lab_widgets.json
  def create
    lab_widget = LabWidget.new(params)

    respond_to do |format|
      if lab_widget.save
        format.json { render :show, status: :created, location: lab_widget }
      else
        format.json { render json: lab_widget.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /lab_widgets/1
  # DELETE /lab_widgets/1.json
  def destroy
    lab_widget.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

end