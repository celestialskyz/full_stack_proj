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

export const requestResvs=()=>dispatch =>{
  return(
    APIres.fetchReservations().then(resvs =>{ dispatch(receiveResvs(resvs));})
  );
};

export const requestRes=(resId)=>dispatch =>{
  return(
    APIres.fetchReservation(resId).then(res =>{ dispatch(receiveResvs(res));})
  );
};



export const createRes = res => dispatch =>{
  return(
    APIres.createReservation(res).then(res => {dispatch(receiveRes(res));}
    )
  );
};


export const updateEvent = event => dispatch =>{
  return(
    EventAPIUtil.updateEvent(event).then(event => {dispatch(receiveEvent(event));})
  );
};

export const deleteEvent = eventId =>dispatch=>{
  return(
    EventAPIUtil.deleteEvent(eventId).then(()=>{dispatch(removeEvent(eventId));})
  );
};