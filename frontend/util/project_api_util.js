export const getAllProjects = () => (
  $.ajax({
    url: '/api/projects',
    method: 'GET'
  })
);

export const postProject = project => (
  $.ajax({
    url: '/api/projects/',
    method: 'POST',
    data: { project }
  })
);

export const patchProject = project => (
  $.ajax({
    url: `/api/projects/${project.id}`,
    method: 'PATCH',
    data: { project }
  })
);

export const deleteProject = id => (
  $.ajax({
    url:  `/api/projects/${id}`,
    method: 'DELETE'
  })
);
