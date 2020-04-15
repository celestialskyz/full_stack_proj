class AddTimeasInt < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :time, :integer
  end
end
