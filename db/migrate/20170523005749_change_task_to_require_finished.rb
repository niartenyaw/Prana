class ChangeTaskToRequireFinished < ActiveRecord::Migration[5.0]
  def change
    change_column_null :tasks, :finished, false
  end
end
