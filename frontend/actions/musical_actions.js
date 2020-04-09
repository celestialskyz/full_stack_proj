export const RECEIVE_MUSICALS = 'RECEIVE_MUSICALS';
import * as API from '../util/musical_api_util';
const receiveMusicals = (musicals) =>{
  return(
   {type: RECEIVE_MUSICALS,
  musicals }
  );
};

export const fetchMusicals = ()=> dispatch =>{
  return(
    API.fetchMusicals().then(musicals =>{dispatch(receiveMusicals(musicals));})
    );
};


