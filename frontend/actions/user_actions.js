export const GET_ALL_USERS = "GET_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
import * as APIUtil from '../util/session_api_util';
const receiveAllUsers =(users)=>{
  
  return({
    type: GET_ALL_USERS,
    users
  });
};

const receiveUser = (userId) =>{
  return({
    type: RECEIVE_USER,
    userId 
    });
};

export const requestUsers=()=>dispatch =>{
  
  return(
    APIUtil.fetchUsers().then(users =>{dispatch(receiveAllUsers(users))})
  );
};


export const requestUser =(userId) =>dispatch=>(
  APIUtil.fetchUser(userId).then(user=>
    {dispatch(receiveUser(user))}
  )
)
