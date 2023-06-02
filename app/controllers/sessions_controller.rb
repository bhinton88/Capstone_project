class SessionsController < ApplicationController

  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
    else
      render json: {errors: ["Not authorized"]}, status: :unauthorized
  end

  def destroy
    if session[:user_id]
      session.delete :user_id
      render json {}
    else 
      render json: {errors: ["You must be logged in first"]}, status: :unauthorized
  end

   
end
