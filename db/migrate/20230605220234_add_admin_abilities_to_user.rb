class AddAdminAbilitiesToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :admin_rights, :boolean
  end
end
