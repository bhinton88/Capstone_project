class ItemSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :price, :description, :quantity_available, :photo_url
end
