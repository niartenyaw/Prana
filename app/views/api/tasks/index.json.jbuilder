current_user.teams.each do |team|
  team.projects.each  do |project|
    project.tasks.each do |task|
      json.set! task.id do
        json.partial! 'api/tasks/task', locals: { task: task }
      end
    end
  end
end
