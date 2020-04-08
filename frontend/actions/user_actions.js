export const GET_ALL_USERS = "GET_ALL_USERS";
import * as APIUtil from '../util/session_api_util';
const receiveAllUsers =(users)=>{
  return({
    type: GET_ALL_USERS,
    users
  });
};

export const requestUsers=()=>dispatch =>{
  return(
    APIUtil.fetchUsers().then(users =>{ dispatch(receiveAllUsers(users))})
  );
};