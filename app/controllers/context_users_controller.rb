class ContextUsersController < ApplicationController
  before_action :set_context_user, only: [:show, :edit, :update, :destroy]

  # position  ~ getPosition
  # context   ~ getContext

  # GET /context_users/position
  def position
    
  end

  # GET /context_users/context
  def context
    
  end


  # GET /context_users
  # GET /context_users.json
  def index
    @context_users = ContextUser.all
  end

  # GET /context_users/1
  # GET /context_users/1.json
  def show
  end

  # GET /context_users/new
  def new
    @context_user = ContextUser.new
  end

  # POST /context_users
  # POST /context_users.json
  def create
    @context_user = ContextUser.new(context_user_params)

    respond_to do |format|
      if @context_user.save
        format.html { redirect_to @context_user, notice: 'Context user was successfully created.' }
        format.json { render :show, status: :created, location: @context_user }
      else
        format.html { render :new }
        format.json { render json: @context_user.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_context_user
      @context_user = ContextUser.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def context_user_params
      params.require(:context_user).permit(:local, :user, :useractivity)
    end
end
