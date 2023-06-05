class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid_data
  rescue_from ActiveRecord::RecordNotFound, with: :handle_record_not_found

  before_action :find_user

  #  do not need to find a user prior to CREATING one 

  skip_before_action :find_user, only: [:create]

  def create
    user = User.create!(user_params)
    # then we need to create a session for the new user
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    if @user
      render json: @user, status: :created
    else
      render json: {errors: ["Please Login first"]}, status: :unauthorized
    end
  end

  #  want functionality to be able to update information about our current user
  def update
    @user.update(user_params)
    render json: @user, status: :created
  end

  #  want functionality to be able to delete our profile if we so choose
  def destroy
    @user.destroy
    head :no_content
  end


  private
  
  #  we want to make sure that we are only allowing the current signed in user to do certain things
  def find_user
    @user = User.find_by(id: session[:user_id])
  end

  def user_params
    params.permit(:username, :password, :password_confirmation, :full_name, :address, :city, :state, :zip_code, :email)
  end

  def handle_invalid_data(invalid)
    render json: {errors: invalid.record.errors.full_messages }, status: :unprocessable_tentity
  end

  def handle_record_not_found
    render json: {errors: ["User not found"]}, status: :not_found
  end
end
