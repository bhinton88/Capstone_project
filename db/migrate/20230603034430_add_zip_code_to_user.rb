class AddZipCodeToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :zip_code, :integer
  end
end
