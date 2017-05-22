import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import TeamReducer from './team_reducer';
import ProjectReducer from './project_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  teams: TeamReducer,
  projects: ProjectReducer
});

export default RootReducer;
