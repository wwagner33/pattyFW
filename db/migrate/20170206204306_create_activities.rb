class CreateActivities < ActiveRecord::Migration[5.0]
  def change
    create_table :activities do |t|
      t.integer :laboratory_id, :null => false
      t.string :name, :limit => 100, :null => false
      t.string :description, :limit => 500
      
      t.timestamps
    end
    add_foreign_key(:activities, :laboratories)
  end
end
