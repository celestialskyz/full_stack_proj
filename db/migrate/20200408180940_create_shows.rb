class CreateShows < ActiveRecord::Migration[5.2]
  def change
    create_table :shows do |t|
      t.string :name, null:false, unique:true
      t.string :description
      t.float :cost
      t.string :website, null:false
      t.string :lottery
      t.string :address, null:false
      t.string :city, null:false
      t.string :state, null:false
      t.string :zip, null:false
      t.string :country, null:false
      t.integer :phone_n, null:false
      t.integer :max_cap, null:false
      t.string :category
      t.timestamps
    end
    add_index :shows, [:state, :city]
    add_index :shows, :name
    add_index :shows, :address
    add_index :shows, :cost
    add_index :shows, :zip
    add_index :shows, :country
    add_index :shows, :category
  end
end
