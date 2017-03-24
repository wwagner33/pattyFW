class CreateLabWidgets < ActiveRecord::Migration[5.0]
  def change
    create_table :lab_widgets do |t|
      t.integer :widget_id, :null => false
      t.integer :laboratory_id, :null => false
      t.string :name, :limit => 100, :null => false
      t.string :rule, :limit => 300
      t.boolean :status
      
      t.timestamps
    end
    add_foreign_key(:lab_widgets, :widgets)
    add_foreign_key(:lab_widgets, :laboratories)
  end
end
