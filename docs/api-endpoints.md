# API Endpoints

## Users
* `/users 'POST'` sign up

## Sessions
* `/users/:id 'PATCH'`  (sign in, log out)

## Projects
* `/projects 'GET'` all projects (limited by user_id)
* `/projects/:id 'GET'` one project
* `/projects/ 'POST'` create a project
* `/projects/:id 'PATCH'` update a project
* `/projects/:id 'DELETE'` delete a project

## Teams
* `/teams 'GET'` all teams (limited by user_id)
* `/teams/:id 'GET'` one team
* `/teams/ 'POST'` create a team
* `/teams/:id 'PATCH'` update a team
* `/teams/:id 'DELETE'` delete a team

## Tasks
* `/tasks 'GET'` all tasks (limited by user_id)
* `/tasks/:id 'GET'` one task
* `/tasks/ 'POST'` create a task
* `/tasks/:id 'PATCH'` update a task
* `/tasks/:id 'DELETE'` delete a task

## Comments
* `/comments 'GET'` all comments (limited by available tasks)
* `/comments/ 'POST'` create a comment
* `/comments/:id 'PATCH'` update a comment
* `/comments/:id 'DELETE'` delete a comment
