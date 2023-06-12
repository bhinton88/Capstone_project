class Item < ApplicationRecord
  belongs_to :category
  has_many :order_items
  has_many :orders, through: :order_items

  def create
  end

  private

  def item_params
    params.permit(:item_name, :price, :description, :quantity_available )
  end
end
