import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_USER_SIGN_IN} from '../actions/session_actions';


const initialState = {
  isAuthenticated: false,
  user: {}
};

const sessionReducer = (state=initialState, action)=>{
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.user, 
        currentUser: action.user};
    case LOGOUT_CURRENT_USER:
      return {
        isAuthenticated: false,
        user: undefined
      };
    // case RECEIVE_USER_SIGN_IN:
    //   return {
    //     ...state,
    //     isSignedIn: true
    //   };
    default:
      return state;
  }
};
export default sessionReducer; 