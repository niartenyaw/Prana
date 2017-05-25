import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import TeamReducer from './team_reducer';
import ProjectReducer from './project_reducer';
import TaskReducer from './task_reducer';
import UserReducer from './user_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  teams: TeamReducer,
  projects: ProjectReducer,
  tasks: TaskReducer,
  users: UserReducer
});

export default RootReducer;
