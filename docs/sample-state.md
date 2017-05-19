# Sample State

The following is an example of a full state.

```js
{
  session: {
    // The user that is signed in
    currentUser: {
      email: "this@this.com",
      name: "First Last"
    },
    // Any errors that need to be displayed
    errors: []
  },

  teams: {
    // All teams the currentUser is a part of
    all_teams: {
      1: {
        name: "Team 1",
        id: 1
      }
    },
    // Current team being viewed
    current: {
      name: "Team 1",
      id: 1
    }
  },

  users: {
    // All Users in the current(Team)
    all_users: {
      1: {
        email: "this@this.com",
        name: "First Last"
      }
    },
    // Current user profile being viewed (only other users)
    current: {
      email: "this@this.com",
      name: "First Last"
    }
  },

  projects: {
    // All projects for current(Team)
    all_projects: {
      1: {
        title: "title",
        id: 1
      }
    },
    // Current project being viewed
    current: {
      title: "title",
      id: 1
    }
  }

  tasks: {
    // All tasks connected to current(Project)
    all_tasks: {
      1: {
        title: "title",
        completed: false,
        project_id: 1,
        assignee_id: 1
      }
    },
    // Current task being viewed
    current: {
      title: "title",
      description: "description",
      creator_id: 1,
      assignee_id: 1,
      project_id: 1,
      completed: false,
      created_at: DATE,
      assigned_at: DATE
    }
  }
}
```
