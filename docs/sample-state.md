{
  projects: {
    1: {
      title: "title",
      user_ids: [1, 3, 4],
      task_ids: [1]
    }
  }

  tasks: {
    1: {
      title: "title",
      completed: false,
      project_id: 1,
      assignee_id: 1
    }
  }
  
  users: {
    1: {
      email: "this@this.com",
      name: "First Last"
    }
  }

  taskDetail: {
    title: "title",
    description: "description",
    creator_id: 1,
    assignee_id: 1,
    project_id: 1,
    completed: false,
    created_at: DATE,
    assigned_at: DATE
  }
}
