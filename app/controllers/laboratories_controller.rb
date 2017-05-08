class LaboratoriesController < ApplicationController

	# GET /laboratories
  def index
    laboratories = Laboratory.all
    render json: laboratories
  end

  # GET /laboratories/1
  def show
    laboratory = Laboratory.find(params[:id])
    render json: laboratory
  end

  # POST /laboratories
  # POST /laboratories.json
  def create
    laboratory = Laboratory.new(params)

    respond_to do |format|
      if laboratory.save
        format.json { render :show, status: :created, location: laboratory }
      else
        format.json { render json: laboratory.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /laboratories/1
  # PATCH/PUT /laboratories/1.json
  def update
    respond_to do |format|
      if laboratory.update(params)
        format.json { render :show, status: :ok, location: laboratory }
      else
        format.json { render json: laboratory.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /laboratories/1
  # DELETE /laboratories/1.json
  def destroy
    laboratory.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

end