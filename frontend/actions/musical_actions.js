export const RECEIVE_MUSICALS = 'RECEIVE_MUSICALS';
export const RECEIVE_MUSICAL = 'RECEIVE_MUSICAL';
export const RECEIVE_MUSICAL_NAME = "RECEIVE_MUSICAL_NAME";
import * as EventAPIUtil from '../util/musical_api_util';
export const INITIALFETCHMUSICALS  = 'INITIALFETCHMUSICALS';

const receiveMusicals = (musicals) =>{
  return(
   {type: RECEIVE_MUSICALS,
  musicals }
  );
};

const receiveMusical = (musical) =>{
  return({
    type: RECEIVE_MUSICAL,
    musical 
    });
};
// const receiveMusicalName = (musicalName) =>{
//   return({
//     type: RECEIVE_MUSICAL_NAME,
//     musicalName 
//     });
// };

const intialreceiveMusicals = (musicals) =>{
  return({
    type: INITIALFETCHMUSICALS,
    musicals
    });
};

export const fetchMusicals = (filters)=> dispatch =>{
  //debugger
  return(
    EventAPIUtil.fetchMusicals(filters).then(musicals =>{dispatch(receiveMusicals(musicals));})
    );
    //debugger
};


export const initialFetchMusicals = ()=> dispatch =>{
  return(
    EventAPIUtil.initialFetchMusicals().then(musicals =>{dispatch(intialreceiveMusicals(musicals));})
  );
  // debugger;
};

export const fetchMusical = (musicalId)=> dispatch =>{
  //debugger
  return(
    EventAPIUtil.fetchMusical(musicalId).then(musical =>{dispatch(receiveMusical(musical));})
    );
  //debugger
};


// export const fetchMusicalName = (musicalId)=> dispatch =>{
//   //debugger
//   return(
//     EventAPIUtil.fetchMusical(musicalId).then(musical =>{dispatch(receiveMusicalName(musical.name));})
//     );
//   //debugger
// };
