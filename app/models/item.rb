class Item < ApplicationRecord
  belongs_to :category
  has_many :order_items
  has_many :orders, through: :order_items

  validates :item_name, :price, :description, :quantity_available,:photo_url, presence: true


  after_save :assign_price_id
  def assign_price_id 
    if self.price_id.blank? and self.product_id.blank? 
      product = Stripe::Product.create({ 
        name: item_name, 
        description: description,
        active: true,
        shippable: true,
        url: photo_url
      })
      price = Stripe::Price.create({
        unit_amount: self.convert_currency,
        currency: 'usd',
        recurring: nil,
        product: product.id
      })
      self.update(price_id: price.id, product_id: product.id)
    end
  end

  def convert_currency
    stripe_price = (self.price * 100).to_i
  end

end
