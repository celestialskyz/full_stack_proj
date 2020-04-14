export const fetchMusicals = (data) => {
  // debugger
  return(
    $.ajax({
    method: "GET",
    url: '/api/musicals',
    data
  })
  );

};
  

export const fetchMusical = (musicalId) => (
  $.ajax({
    method: "GET",
    url: `/api/musicals/${musicalId}`
  })
);