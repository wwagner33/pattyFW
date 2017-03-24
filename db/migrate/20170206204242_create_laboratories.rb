class CreateLaboratories < ActiveRecord::Migration[5.0]
  def change
    create_table :laboratories do |t|
      t.integer :subject_id, :null => false
      t.string :name, :limit => 200, :null => false
      t.string :local, :limit => 200
      t.string :local_server, :limit => 300
      
      t.timestamps
    end
    add_foreign_key(:laboratories, :subjects)
  end
end
