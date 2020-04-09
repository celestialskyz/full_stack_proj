import {combineReducers} from 'redux';
import musicalsReducer from './musicals_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    musicals:musicalsReducer
});
export default entitiesReducer;