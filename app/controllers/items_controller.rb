class ItemsController < ApplicationController

  before_action :authorize

  def index
    items = Item.all
    render json: items
  end

  def create
  end

  def update
  #  if we want to update the price of an item, we must create a new price_ID and associate it with the product
  end


  private

  def item_params
    params.permit(:item_name, :price, :description, :quantity_available, :category_id, :photo_url )
  end

  def authorize
    render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
  end

  # we want to make sure that if the current user does NOT have admin rights, that they are unable
  #  to update items 
  def has_admin_rights
    user = User.find_by(id: session[:user_id])
    if !user.admin_rights
      render json: {errors: ["Not authorized"]}, status: :unauthorized 
    end
  end
end
