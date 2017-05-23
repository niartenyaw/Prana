@tasks.each do |task|
  json.set! task.id do
    json.partial! 'api/tasks/task', locals: { task: task }
  end
end
