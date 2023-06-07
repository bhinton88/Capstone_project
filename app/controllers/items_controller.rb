class ItemsController < ApplicationController

  before_action :authorize

  def index
    items = Item.all
    render json: items
  end



  private

  def item_params
  end

  def authorize
    render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
  end
end
