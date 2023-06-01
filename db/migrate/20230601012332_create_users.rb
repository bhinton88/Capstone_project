class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :customers do |t|
      t.string :username
      t.string :address
      t.string :city
      t.string :state
      t.string :email
      t.string :stripe_id
      t.timestamps
    end
  end
end
