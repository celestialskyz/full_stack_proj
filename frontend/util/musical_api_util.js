export const fetchMusicals = () => (
  $.ajax({
    method: "GET",
    url: '/api/musicals'
  })
);
