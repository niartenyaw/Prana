# Schema

### Users
* `email`
* `name`
* `created_at`
* `modified_at`

### Teams
* `name`
* `created_at`
* `modified_at`

### TeamMemberships
(join table)
* `user_id`
* `team_id`
* `created_at`
* `modified_at`

### Projects
* `owner_id`
* `name`
* `created_at`
* `modified_at`

### ProjectMemberships
(join table)
* `user_id`
* `project_id`
* `created_at`
* `modified_at`

### Tasks
* `title`
* `description`
* `finished`
* `creator_id`
* `assignee_id`
* `project_id`
* `created_at`
* `modified_at`
