class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :show_id, foreign_key: true, null:false
      t.integer :reserver_id,  foreign_key: true, null:false
      t.integer :party_size, null:false
      t.date :date, null:false
    end
    add_index :reservations, :show_id
    add_index :reservations, :reserver_id
  end
end
