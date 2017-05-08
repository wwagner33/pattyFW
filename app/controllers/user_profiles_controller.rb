class UserProfilesController < ApplicationController
  
  # GET /user_profiles
  def index
    user_profiles = UserProfile.all
    render json: user_profiles
  end

  # GET /user_profiles/1
  def show
    user_profile = UserProfile.find(params[:id])
    render json: user_profile
  end

  # assignProfile
  # POST /user_profiles
  # POST /user_profiles.json
  def create
    user_profile = UserProfile.new(params)

    respond_to do |format|
      if user_profile.save
        format.json { render :show, status: :created, location: user_profile }
      else
        format.json { render json: user_profile.errors, status: :unprocessable_entity }
      end
    end
  end

  # removeProfile
  # DELETE /user_profiles/1
  # DELETE /user_profiles/1.json
  def destroy
    user_profile.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

end
