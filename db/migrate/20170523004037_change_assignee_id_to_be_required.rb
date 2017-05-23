class ChangeAssigneeIdToBeRequired < ActiveRecord::Migration[5.0]
  def change
    change_column_null :tasks, :assignee_id, false
  end
end
