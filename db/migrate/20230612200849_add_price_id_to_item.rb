class AddPriceIdToItem < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :price_id, :string
  end
end
