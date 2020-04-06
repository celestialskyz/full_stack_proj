class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null:false, unique:true
      t.string :first_name, null:false
      t.string :last_name, null:false
      t.string :country, null:false
      t.string :session_token
      t.string :password_digest
      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique:true
  end
end
