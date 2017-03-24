class CreateUserActivities < ActiveRecord::Migration[5.0]
  def change
    create_table :user_activities do |t|
      t.integer :activity_id, :null => false
      t.integer :user_id, :null => false
      t.datetime :date, :null => false
      t.string :local, :limit => 100
      t.integer :status
      
      t.timestamps
    end
    add_foreign_key(:user_activities, :activities)
  end
end
