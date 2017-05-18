class CreateTeams < ActiveRecord::Migration[5.0]
  def change
    create_table :teams do |t|
      t.string :name, null: false
      t.integer :creator_id, null: false

      t.timestamps
    end

    add_index :teams, :creator_id
  end
end
