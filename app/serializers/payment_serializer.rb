class PaymentSerializer < ActiveModel::Serializer
  attributes :id, :order_id, :integer, :stripe_payment_id, :status
end
