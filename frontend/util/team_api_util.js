export const getAllTeams = () => (
  $.ajax({
    url: '/api/teams',
    method: 'GET'
  })
);

export const postTeam = team => (
  $.ajax({
    url: `/api/teams`,
    method: 'POST',
    data: { team }
  })
);

export const patchTeam = team => (
  $.ajax({
    url: `/api/teams/${team.id}`,
    method: 'PATCH',
    data: { team }
  })
);

export const deleteTeam = id => (
  $.ajax({
    url: `/api/teams/${id}`,
    method: 'DELETE'
  })
);
