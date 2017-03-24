class UserActivitiesController < ApplicationController
  before_action :set_user_activity, only: [:show, :edit, :update, :destroy]

  # index   ~ list
  # show    ~ get
  # create  ~ recordsActivity
  # get_user_actions  ~ listUserAction
  # get_lab_actions   ~ listActionLab

  # GET 
  def get_user_actions
    
  end

  # GET 
  def get_lab_actions
    
  end


  # GET /user_activities
  # GET /user_activities.json
  def index
    @user_activities = UserActivity.all
  end

  # GET /user_activities/1
  # GET /user_activities/1.json
  def show
  end

  # GET /user_activities/new
  def new
    @user_activity = UserActivity.new
  end

  # POST /user_activities
  # POST /user_activities.json
  def create
    @user_activity = UserActivity.new(user_activity_params)

    respond_to do |format|
      if @user_activity.save
        format.html { redirect_to @user_activity, notice: 'User activity was successfully created.' }
        format.json { render :show, status: :created, location: @user_activity }
      else
        format.html { render :new }
        format.json { render json: @user_activity.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_activity
      @user_activity = UserActivity.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_activity_params
      params.require(:user_activity).permit(:date, :local, :status, :activity, :user)
    end
end
