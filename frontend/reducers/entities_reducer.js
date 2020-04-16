import {combineReducers} from 'redux';
import musicalsReducer from './musicals_reducer';
import usersReducer from './users_reducer';
import resvsReducer from './reservations_reducer';
const entitiesReducer = combineReducers({
    users: usersReducer,
    musicals:musicalsReducer,
    resvs: resvsReducer
});
export default entitiesReducer;