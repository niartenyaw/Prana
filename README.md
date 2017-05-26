# Prana

Live version: [Prana](https://prana.herokuapp.com/)

Prana is a clone of the popular task management website [Asana](https://www.asana.com). It helps organizations arrange tasks into teams and projects. It is built with a RoR backend, PostgreSQL database, a React/Redux frontend architecture.

## Features

### User Authentication

Prana's user authentication uses the `BCrypt` gem. Users are required to enter a sufficient email address and password in order to sign up.

### Teams and Projects

##### Create a new Team

Click the plus button next to the teams header in the side nav bar and type in the name. Press `Enter` or click out of the input field to save. Or press `Esc` to cancel.

![Image]()

##### Create a new Project

After creating a team, a project header will appear in the side nav. Select the correct team for your project. Then, click the `+` button next to the projects header. Add a project to that team!

![Image]()

##### Edit a Team or Project name

Select it from the side nav and click on its name in the main panel. Edit away! Press `Esc` to cancel the edit.

![Image]()

##### Delete a Team or Project

Select the team or project to be deleted. In the main panel, click the `Delete` button next to the name. Confirm that you want to delete it!

_Note: Be careful! Deleting a team will delete all associated projects and tasks. Deleting a project will delete associated tasks._

![Image]()

### Tasks

Now the fun begins!

##### Create a new Task!

Select the project for the task. Click on the "new task" section and type away! Press `Enter` or click out of the input field to save.

![Image]()

##### Add details to a Task

After creating a new task, a task details panel will appear on the right side of the main panel. Click on the title or description to edit them. To view details of an existing task, click on the task from the team or project panel.

![Image]()

##### Complete a Task

To mark a Task as complete, click the check icon next to the task title in the list or detail view. It will strike out that task and move it to the bottom of any task list. If you want to change a completed task to incomplete again, simply uncheck that same icon.

![image]()

##### Delete a Task

Click on the task to delete. In the task details panel, click on the `Delete` button next to its title. Confirm that you want to delete it!

## Implementation

The `team`, `project`, and `task` states all share some identical slices and presentational attributes. Prana takes advantage of this by using the same `index`, `show`, and `form` React presentational components to display all three. The differences are handled by duck-typing, conditional rendering based on `type`, and type-based class names for styling.

Below is the render function for `comp_index_item.js`. For teams and projects, it renders buttons for the lists in the side nav bar. For tasks, it renders the `TaskFormContainer` so it can be edited.

```javascript
render() {
  const comp = this.props.comp;
  const type = this.props.type;
  const Container = this.props.Container;
  return (
    <li className={`${type}-index-item`}>
      { type === "task" ? (
        <Container type={type} comp={this.props.comp} projectId={this.props.projectId} />
      ) : (
        <button onClick={this.handleClick}>{comp.name}</button>
      ) }
    </li>
  );
}
```

Below is a snippet of the shared form. All three `type`s share a name input while only `task`s an `taskdetail`s have a completion checkbox and only a `taskdetail` has a `description`.

```javascript
<form
  className={`${type}-form`}
  key={currId}
  onSubmit={this.handleSubmit} >
  <div className={`${type}-form-header`}>
    <input
      className={`${type}-name-input ${type}-form-input`}
      ref={(input) => { this.nameInput = input; }}
      type="text"
      onKeyDown={this.handleKeyDown("name", this.nameInput)}
      onChange={this.handleChange("name")}
      onFocus={this.handleFocus}
      onBlur={this.handleOnBlur}
      placeholder={`new ${name === "taskdetail" ? "task" : name}` }
      value={this.state.name} />
      {
        (type === "task" || type === "taskdetail") && currId ? (
          <input
            className="finished-button"
            type="checkbox"
            checked={this.state.finished}
            onChange={this.handleFinish} />
        ) : ("")
      }
  </div>
    {
      type === "taskdetail" ? (
        <textarea
          className={`${type}-description-input ${type}-form-input`}
          ref={(input) => { this.descInput = input; }}
          type="text"
          onKeyDown={this.handleKeyDown("description", this.descInput)}
          onChange={this.handleChange("description")}
          onFocus={this.handleFocus}
          onBlur={this.handleOnBlur}
          placeholder="description"
          value={this.state.description} />
      ) : ("")
    }
</form>
```

Duck-typing functions in the containers (`postComp`, `patchComp`) and conditionals handle the differences in `type`s and actions to be taken.

```javascript
handleOnBlur() {
  if (this.state.id) {
    this.patch();
  }
  else {
    this.post();
  }
}

patch() {
  this.props.patchComp(this.state)
    .fail(() => {
      this.setState({ name: this.props.current.name })
    });
}

post() {
  this.props.postComp(this.state)
    .then(resp => {
      if (this.props.type === "task") {
        const currUrl = this.props.match.url.split("/").slice(0,3).join("/");
        this.props.history.push(`${currUrl}/tasks/${resp.task.id}`);
      }
      else {
        this.props.history.push(`/${this.props.type}s/${resp.current.id}`);
      }
    });
}
```

## Future Directions

* Additional information on task index sections (what team, project, and user is this task associated with)

* Mailer for inviting org members

* User subscribing to teams and projects

* Choose assignee in task detail (not default to current user).

* Drag and Drop ordering

* Email verification

* Two-factor authentication
