import {signup, login, logout} from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
//export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () =>({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = ({errors}) =>({
    type: RECEIVE_ERRORS,
    errors
});


// export const receiveUserSignIn = () => ({
//     type: RECEIVE_USER_SIGN_IN
//   });


export const createNewUser = formUser => dispatch => (signup(formUser)
.then(
  (user)=>(
    dispatch(receiveCurrentUser(user))
//   ), err => (
//     dispatch(receiveErrors(err.response.data))
//   ))
// );
.catch(errors => {
        dispatch(receiveErrors(errors.responseJSON));
    })
  )))


export const loginUser = formUser => dispatch => (
    login(formUser)
    .then(
        (user) => {
            
            dispatch(receiveCurrentUser(user));
        })
    .catch(errors => {
        
            dispatch(receiveErrors(errors.responseJSON));
        })
    );

export const logoutUser = () => dispatch => 
(
    logout()
    .then(
        ()=>{ 
        dispatch(logoutCurrentUser());
        })
    .catch(errors => {
            dispatch(receiveErrors(errors.responseJSON));
        })
    );