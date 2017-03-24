class LabWidgetsController < ApplicationController
  before_action :set_lab_widget, only: [:show, :edit, :update, :destroy]

  # index ~ list
  # show  ~ getLabContext
  
  # GET /lab_widgets
  # GET /lab_widgets.json
  def index
    @lab_widgets = LabWidget.all
  end

  # GET /lab_widgets/1
  # GET /lab_widgets/1.json
  def show
  end

  # GET /lab_widgets/new
  def new
    @lab_widget = LabWidget.new
  end

  # GET /lab_widgets/1/edit
  def edit
  end

  # POST /lab_widgets
  # POST /lab_widgets.json
  def create
    @lab_widget = LabWidget.new(lab_widget_params)

    respond_to do |format|
      if @lab_widget.save
        format.html { redirect_to @lab_widget, notice: 'Lab widget was successfully created.' }
        format.json { render :show, status: :created, location: @lab_widget }
      else
        format.html { render :new }
        format.json { render json: @lab_widget.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /lab_widgets/1
  # PATCH/PUT /lab_widgets/1.json
  def update
    respond_to do |format|
      if @lab_widget.update(lab_widget_params)
        format.html { redirect_to @lab_widget, notice: 'Lab widget was successfully updated.' }
        format.json { render :show, status: :ok, location: @lab_widget }
      else
        format.html { render :edit }
        format.json { render json: @lab_widget.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /lab_widgets/1
  # DELETE /lab_widgets/1.json
  def destroy
    @lab_widget.destroy
    respond_to do |format|
      format.html { redirect_to lab_widgets_url, notice: 'Lab widget was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_lab_widget
      @lab_widget = LabWidget.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def lab_widget_params
      params.require(:lab_widget).permit(:name, :rule, :status, :widget, :laboratory)
    end
end
