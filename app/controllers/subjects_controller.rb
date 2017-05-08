class SubjectsController < ApplicationController
  
  # GET /subjects
  def index
    subjects = Subject.all
    render json: subjects
  end

  # GET /subjects/1
  def show
    subject = Subject.find(params[:id])
    render json: subject
  end

end
