export const fetchMusicals = (data) => {
    return(
    $.ajax({
    method: "GET",
    url: '/api/musicals',
    data
  })
  );

};

export const initialFetchMusicals = () => {
  return(
  $.ajax({
  method: "GET",
  url: '/api/musicals'
})
);

};
  
export const fetchMusical = (musicalId) => {
  // debugger
  return(
  $.ajax({
    method: "GET",
    url: `/api/musicals/${musicalId}`
  })
  );
  // debugger
};