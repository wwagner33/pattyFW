class CreateProfiles < ActiveRecord::Migration[5.0]
  def change
    create_table :profiles do |t|
      t.string :name, :limit => 100, :null => false
      t.string :action, :limit => 100
      t.integer :permission

      t.timestamps
    end
  end
end
