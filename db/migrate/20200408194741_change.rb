class Change < ActiveRecord::Migration[5.2]
  def change
    rename_table :shows, :musicals
  end
end
