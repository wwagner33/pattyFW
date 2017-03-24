class CreateContextWidgets < ActiveRecord::Migration[5.0]
  def change
    create_table :context_widgets do |t|
      t.integer :lab_widget_id, :null => false
      t.integer :user_activity_id, :null => false
      t.string :value, :limit => 100
      
      t.timestamps
    end
    add_foreign_key(:context_widgets, :lab_widgets)
    add_foreign_key(:context_widgets, :user_activities)
  end
end
