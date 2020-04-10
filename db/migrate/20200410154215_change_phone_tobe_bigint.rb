class ChangePhoneTobeBigint < ActiveRecord::Migration[5.2]
  def change
    change_column :musicals, :phone_n, :bigint
  end
end
