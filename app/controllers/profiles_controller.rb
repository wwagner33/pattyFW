class ProfilesController < ApplicationController
  
  # GET /profiles
  def index
    profiles = Profile.all
    render json: profiles
  end

  # getPermissions
  # GET /profiles/1
  def show
    profile = Profile.find(params[:id])
    render json: profile
  end

end
