export const getAllUsers = () => (
  $.ajax({
    url: '/api/users',
    method: 'GET'
  })
);
