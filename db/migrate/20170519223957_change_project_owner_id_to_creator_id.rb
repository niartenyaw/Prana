class ChangeProjectOwnerIdToCreatorId < ActiveRecord::Migration[5.0]
  def change
    rename_column :projects, :owner_id, :creator_id
  end
end
