class CreateSubjects < ActiveRecord::Migration[5.0]
  def change
    create_table :subjects do |t|
      t.string :name, :limit => 100, :null => false

      t.timestamps
    end
  end
end
