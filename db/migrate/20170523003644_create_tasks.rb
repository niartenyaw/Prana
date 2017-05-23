class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.string :name, null: false
      t.string :description
      t.boolean :finished, default: false
      t.integer :creator_id, null: false
      t.integer :assignee_id
      t.integer :project_id

      t.timestamps
    end

    add_index :tasks, :creator_id
    add_index :tasks, :assignee_id
    add_index :tasks, :project_id
  end
end
