class CreateWidgets < ActiveRecord::Migration[5.0]
  def change
    create_table :widgets do |t|
      t.string :type, :limit => 100, :null => false
      t.string :rule, :limit => 300

      t.timestamps
    end
  end
end
