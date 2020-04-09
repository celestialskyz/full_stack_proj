class ChangeLotterytypeToBool < ActiveRecord::Migration[5.2]
  def change
     change_column :musicals, :lottery, 'boolean USING CAST(lottery AS boolean)'
  end
end
