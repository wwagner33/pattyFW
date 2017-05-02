class UsersController < ApplicationController
  
  # POST /users/authenticate
  def authenticate
    
  end

  # GET /users
  def index
    users = User.all
    render json: users
  end

  # GET /users/1
  def show
    user = User.find(params[:id])
    render json: user
  end

  # POST /users
  # POST /users.json
  def create
    user = User.new(params)

    respond_to do |format|
      if user.save
        format.json { render :show, status: :created, location: user }
      else
        format.json { render json: user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    respond_to do |format|
      if user.update(params)
        format.json { render :show, status: :ok, location: user }
      else
        format.json { render json: user.errors, status: :unprocessable_entity }
      end
    end
  end

end
