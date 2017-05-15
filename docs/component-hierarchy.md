# React Component Hierarchy

* **App**

  * **UserAuthContainer**

  * **TopNavContainer**

    * **SearchBarContainer**


  * **SideNavContainer** (includes list of projects, list of users on current project)

  * **MainContainer**
    * **TaskIndexContainer** (list of tasks)

      * **TaskItemContainer** (always displays title. sometimes project, assignee if applicable. Allows for click-in editing)

    * **TaskDetailContainer** (displays details of a task. allows click-in editing for title and description)

    * **TeamDetailContainer** (displays projects for a given team. each links to project show page)
