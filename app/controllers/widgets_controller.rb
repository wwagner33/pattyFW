class WidgetsController < ApplicationController
  before_action :set_widget, only: [:show, :edit, :update, :destroy]

  # index   ~ list
  
  # GET /widgets
  # GET /widgets.json
  def index
    @widgets = Widget.all
  end

  # GET /widgets/1
  # GET /widgets/1.json
  def show
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_widget
      @widget = Widget.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def widget_params
      params.require(:widget).permit(:type, :rule)
    end
end
