class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.integer :owner_id, null: false
      t.integer :team_id, null: false
      t.string :name, null: false

      t.timestamps
    end

    add_index :projects, :owner_id
    add_index :projects, :team_id
  end
end
