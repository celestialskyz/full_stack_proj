export const fetchMusicals = (data) => {
    return(
    $.ajax({
    method: "GET",
    url: '/api/musicals',
    data
  })
  );

};
  
export const fetchMusical = (musicalId) => {
  debugger
  return(
  $.ajax({
    method: "GET",
    url: `/api/musicals/${musicalId}`
  })
  );
  debugger
};