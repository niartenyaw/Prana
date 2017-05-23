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
    if (tasks[i][varName] === Number(varId)) {
      selectedTasks.push(tasks[i]);
    }
  }

  return selectedTasks;
};
