class SessionsController < ApplicationController

  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
    else
      render json: {errors: ["Not authorized"]}, status: :unauthorized
  end

  def destroy
  end

  private

  def 
end
