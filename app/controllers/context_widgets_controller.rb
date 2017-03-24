class ContextWidgetsController < ApplicationController
  before_action :set_context_widget, only: [:show, :edit, :update, :destroy]

  # GET /context_widgets
  # GET /context_widgets.json
  def index
    @context_widgets = ContextWidget.all
  end

  # GET /context_widgets/1
  # GET /context_widgets/1.json
  def show
  end

  # GET /context_widgets/new
  def new
    @context_widget = ContextWidget.new
  end

  # GET /context_widgets/1/edit
  def edit
  end

  # POST /context_widgets
  # POST /context_widgets.json
  def create
    @context_widget = ContextWidget.new(context_widget_params)

    respond_to do |format|
      if @context_widget.save
        format.html { redirect_to @context_widget, notice: 'Context widget was successfully created.' }
        format.json { render :show, status: :created, location: @context_widget }
      else
        format.html { render :new }
        format.json { render json: @context_widget.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /context_widgets/1
  # PATCH/PUT /context_widgets/1.json
  def update
    respond_to do |format|
      if @context_widget.update(context_widget_params)
        format.html { redirect_to @context_widget, notice: 'Context widget was successfully updated.' }
        format.json { render :show, status: :ok, location: @context_widget }
      else
        format.html { render :edit }
        format.json { render json: @context_widget.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /context_widgets/1
  # DELETE /context_widgets/1.json
  def destroy
    @context_widget.destroy
    respond_to do |format|
      format.html { redirect_to context_widgets_url, notice: 'Context widget was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_context_widget
      @context_widget = ContextWidget.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def context_widget_params
      params.require(:context_widget).permit(:value, :labwidget, :useractivity)
    end
end
