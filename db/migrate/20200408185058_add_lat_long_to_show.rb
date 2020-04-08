class AddLatLongToShow < ActiveRecord::Migration[5.2]
  def change
    add_column :shows, :lat, :float
    add_column :shows, :lng, :float
  end
end
