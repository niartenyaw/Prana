export const getAllTasks = () => (
  $.ajax({
    url: '/api/tasks',
    method: 'GET'
  })
);

export const postTask = task => (
  $.ajax({
    url: '/api/tasks',
    method: 'POST',
    data: { task }
  })
);

export const patchTask = task => (
  $.ajax({
    url: `/api/tasks/${task.id}`,
    method: 'PATCH',
    data: { task }
  })
);

export const deleteTask = id => (
  $.ajax({
    url: `/api/tasks/${id}`,
    method: 'DELETE'
  })
);
