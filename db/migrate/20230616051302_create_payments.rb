class CreatePayments < ActiveRecord::Migration[6.1]
  def change
    create_table :payments do |t|
      t.string :order_id
      t.string :integer
      t.string :stripe_payment_id
      t.string :status
      t.timestamps
    end
  end
end
