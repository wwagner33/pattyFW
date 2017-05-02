class ActivitiesController < ApplicationController
  
  # GET /activities
  def index
    activities = Activity.all
    render json: activities
  end

  # GET /activities/1
  def show
    activity = Activity.find(params[:id])
    render json: activity
  end

  # POST /activities
  # POST /activities.json
  def create
    activity = Activity.new(params)

    respond_to do |format|
      if @activity.save
        format.json { render :show, status: :created, location: activity }
      else
        format.json { render json: activity.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /activities/1
  # PATCH/PUT /activities/1.json
  def update
    respond_to do |format|
      if activity.update(params)
        format.json { render :show, status: :ok, location: activity }
      else
        format.json { render json: activity.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /activities/1
  # DELETE /activities/1.json
  def destroy
    activity.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

end
