class CategoriesController < ApplicationController

  before_action :authorize

  # create logic that will take in a category name and return the items from that category,will happen on click of a box with respective category name in it 

  #  remember that index is for ALL items.. and show is for a singular item 

  def index 
    categories_with_items = Category.all
    render json: categories_with_items 
  end


  private

  def authorize
    render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
  end

end
