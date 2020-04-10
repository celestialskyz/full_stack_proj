export const RECEIVE_MUSICALS = 'RECEIVE_MUSICALS';
export const RECEIVE_MUSICAL = 'RECEIVE_MUSICAL';
import * as API from '../util/musical_api_util';
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


export const fetchMusicals = ()=> dispatch =>{
  return(
    API.fetchMusicals().then(musicals =>{dispatch(receiveMusicals(musicals));})
    );
};

export const fetchMusical = (musicalId)=> dispatch =>{
  return(
    API.fetchMusical(musicalId).then(musical =>{dispatch(receiveMusical(musical));})
    );
};
