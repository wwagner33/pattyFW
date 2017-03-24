class CreateUserProfiles < ActiveRecord::Migration[5.0]
  def change
    create_table :user_profiles do |t|
      t.integer :profile_id, :null => false
      t.integer :user_id, :null => false
      t.integer :laboratory_id, :null => false

      t.timestamps
    end
    add_foreign_key(:user_profiles, :profiles)
    add_foreign_key(:user_profiles, :users)
    add_foreign_key(:user_profiles, :laboratories)
  end
end
