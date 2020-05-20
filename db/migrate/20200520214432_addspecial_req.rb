class AddspecialReq < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :specialReq, :string
  end
end
