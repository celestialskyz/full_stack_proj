import * as APIres from '../util/reservation_api_util';

export const RECEIVE_RESVS = 'RECEIVE_RESVS';
export const RECEIVE_RES = 'RECEIVE_RES';
export const REMOVE_RES = 'REMOVE_RES';

const receiveResvs =(resvs)=>{
  return({
    type: RECEIVE_RESVS,
    resvs
  });
}
;
const receiveRes =(res)=>{
  return({
    type: RECEIVE_RES,
    res
  });
};

const removeRes =(resId)=>{
  return({
    type: REMOVE_RES,
    resId
  });
};

export const requestResvs=(userId)=>dispatch =>{
  return(
    APIres.fetchReservations(userId).then(resvs =>{ dispatch(receiveResvs(resvs));})
  );
};

export const requestRes=(userId, resId)=>dispatch =>{
  return(
    APIres.fetchReservation(userId, resId).then(res =>{ dispatch(receiveResvs(res));})
  );
};

export const createRes = (userId, res) => dispatch =>{
  return(
    APIres.createReservation(userId, res).then(res => {dispatch(receiveRes(res));}
    )
  );
};

export const updateRes = (userId, res) => dispatch =>{
  return(
    APIres.updateReservation(userId, res).then(res => {dispatch(receiveRes(res));})
  );
};

export const deleteRes = (userId, resId) =>dispatch=>{
  return(
    APIres.deleteReservation(userId, resId).then(()=>{dispatch(removeRes(resId));})
  );
};