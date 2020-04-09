class CreateShows < ActiveRecord::Migration[5.2]
  def change
    create_table :musicals do |t|
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
      t.string :category, null:false
      t.float :lat, null:false
      t.float :lng, null:false
      t.timestamps
    end
    add_index :musicals, :state
    add_index :musicals, :city
    add_index :musicals, :name
    add_index :musicals, :address
    add_index :musicals, :cost
    add_index :musicals, :zip
    add_index :musicals, :country
    add_index :musicals, :category
    
  end
end
