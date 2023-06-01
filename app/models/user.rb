class User < ApplicationRecord
  has_secure_password
  has_many :orders

  validates :username, :address, :city, :state, :email, :stripe_id, presence: true

  # we set a method to run before creation of a new user

  # before_validation :create_on_stripe, on: :create

  #  for the email and name, since this is an INSTANCE method, the self is implicit

  # def create_on_stripe
  #   params = { email: email, name: name }  
  #   response = Stripe::Customer.create(params)
  #   self.stripe_id = response.id
  # end
end
