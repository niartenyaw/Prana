# Schema

### Users
* id
* email
* name
* created_at
* modified_at

### Teams
* name
* created_at
* modified_at

### TeamMemberships (join table)
* user_id
* team_id
* created_at
* modified_at

### Projects
* owner_id
* title
* created_at
* modified_at

### ProjectMemberships (join table)
* user_id
* project_id
* created_at
* modified_at

### Tasks
* title
* Description
* Finished
* creator_id
* assignee_id
* project_id
* created_at
* modified_at
