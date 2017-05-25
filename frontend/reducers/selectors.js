export const asArray = obj => {
  obj = obj || {};
  return Object.keys(obj).map(key => obj[key]);
};


export const selectTeamProjects = (teamId, projects) => {
  projects = asArray(projects);

  const teamProjects = [];

  for (let i = 0; i < projects.length; i++) {
    if (projects[i].team_id === Number(teamId)) {
      teamProjects.push(projects[i]);
    }
  }

  return teamProjects;
};


export const selectProjectTasks = (projectId, tasks) => {
  tasks = asArray(tasks);
  const selectedTasks = [];
  const selectedFinishedTasks = [];

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    if (task["project_id"] === Number(projectId)) {
      if (task.finished) {
        selectedFinishedTasks.push(task);
      }
      else {
        selectedTasks.push(task);
      }
    }
  }

  return selectedTasks.concat(selectedFinishedTasks);
};


export const selectTeamTasks = (teamId, projects, tasks) => {

  const allProjectIds = Object.keys(projects);

  const teamProjectIds = [];

  for (let i = 0; i < allProjectIds.length; i++) {
    const currProj = projects[allProjectIds[i]];
    if (currProj.team_id === Number(teamId)) {
      teamProjectIds.push(currProj.id);
    }
  }

  tasks = asArray(tasks);

  const selectedTasks = [];
  const selectedFinishedTasks = [];

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    if (teamProjectIds.includes(task.project_id)) {
      if (task.finished) {
        selectedFinishedTasks.push(task);
      }
      else {
        selectedTasks.push(task);
      }
    }
  }

  return selectedTasks.concat(selectedFinishedTasks);
};

export const selectUserTasks = (userId, tasks) => {
  tasks = asArray(tasks);

  const selectedTasks = [];
  const selectedFinishedTasks = [];

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    if (task.assignee_id === userId) {
      if (task.finished) {
        selectedFinishedTasks.push(task);
      }
      else {
        selectedTasks.push(task);
      }
    }
  }

  return selectedTasks.concat(selectedFinishedTasks);
};
