class UserActivitiesController < ApplicationController

  # GET /user_activities/user/1.json
  def get_user_actions
    
  end

  # GET /user_activities/laboratory/1.json
  def get_lab_actions
    
  end

  # GET /user_activities
  def index
    user_activities = UserActivity.all
    render json: user_activities
  end

  # GET /user_activities/1
  def show
    user_activity = UserActivity.find(params[:id])
    render json: user_activity
  end

  # POST /user_activities
  # POST /user_activities.json
  def create
    user_activity = UserActivity.new(params)

    respond_to do |format|
      if user_activity.save
        format.json { render :show, status: :created, location: user_activity }
      else
        format.json { render json: user_activity.errors, status: :unprocessable_entity }
      end
    end
  end

end