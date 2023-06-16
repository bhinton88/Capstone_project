class PaymentsController < ApplicationController

 before_action :find_customer
 
  private

  def find_customer
    @current_user = User.find_by(id: session[:user_id])
  end
end
