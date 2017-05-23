export const asArray = obj => {
  obj = obj || {};
  return Object.keys(obj).map(key => obj[key]);
};

export const selectTeamProjects = (teamId, projects) => {
  projects = asArray(projects);

  const teamProjects = [];

  for (let i = 0; i < projects.length; i++) {
    if (projects[i].team_id === teamId) {
      teamProjects.push(projects[i]);
    }
  }

  return teamProjects;
};

export const selectTasks = (varId, varName, tasks) => {
  tasks = asArray(tasks);
  const selectedTasks = [];

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    if (task[varName] === Number(varId) && !task.finished) {
      selectedTasks.push(task);
    }
  }

  return selectedTasks;
};
