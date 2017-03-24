class LaboratoriesController < ApplicationController
  before_action :set_laboratory, only: [:show, :edit, :update, :destroy]

  # index ~ list
  # show  ~ get
  
  # GET /laboratories
  # GET /laboratories.json
  def index
    @laboratories = Laboratory.all
  end

  # GET /laboratories/1
  # GET /laboratories/1.json
  def show
  end

  # GET /laboratories/new
  def new
    @laboratory = Laboratory.new
  end

  # GET /laboratories/1/edit
  def edit
  end

  # POST /laboratories
  # POST /laboratories.json
  def create
    @laboratory = Laboratory.new(laboratory_params)

    respond_to do |format|
      if @laboratory.save
        format.html { redirect_to @laboratory, notice: 'Laboratory was successfully created.' }
        format.json { render :show, status: :created, location: @laboratory }
      else
        format.html { render :new }
        format.json { render json: @laboratory.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /laboratories/1
  # PATCH/PUT /laboratories/1.json
  def update
    respond_to do |format|
      if @laboratory.update(laboratory_params)
        format.html { redirect_to @laboratory, notice: 'Laboratory was successfully updated.' }
        format.json { render :show, status: :ok, location: @laboratory }
      else
        format.html { render :edit }
        format.json { render json: @laboratory.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /laboratories/1
  # DELETE /laboratories/1.json
  def destroy
    @laboratory.destroy
    respond_to do |format|
      format.html { redirect_to laboratories_url, notice: 'Laboratory was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_laboratory
      @laboratory = Laboratory.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def laboratory_params
      params.require(:laboratory).permit(:name, :local, :local_server, :subject)
    end
end
