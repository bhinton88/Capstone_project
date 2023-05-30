class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :item_name
      t.float :price
      t.text :description
      t.integer :quantity_available
      t.string :photo_url
      t.integer :category_id
      t.timestamps
    end
  end
end
