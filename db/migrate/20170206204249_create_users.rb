class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name, :limit => 100, :null => false
      t.string :login, :limit => 50
      t.string :password, :limit => 60
      t.string :tag, :limit => 50
      t.string :email, :limit => 100

      t.timestamps
    end
  end
end
