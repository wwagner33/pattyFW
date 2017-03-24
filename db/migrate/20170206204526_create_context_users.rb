class CreateContextUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :context_users do |t|
      t.integer :user_id, :null => false
      t.integer :user_activity_id, :null => false
      t.string :local, :limit => 100 
      
      t.timestamps
    end
    add_foreign_key(:user_profiles, :users)
    add_foreign_key(:user_profiles, :user_activities)
  end
end
