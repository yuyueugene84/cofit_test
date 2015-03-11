class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :role
      t.string :timezone
      t.string :slug
      t.string :password_digest
      t.string :email
      t.timestamps
    end
  end
end
