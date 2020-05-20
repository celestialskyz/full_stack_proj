class AddPhoneN < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :reserverPhoneN, :string
  end
end
