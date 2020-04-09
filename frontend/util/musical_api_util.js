export const fetchMusicals = () => (
  $.ajax({
    method: "GET",
    url: '/api/musicals'
  })
);

export const fetchMusical = (musicalId) => (
  $.ajax({
    method: "GET",
    url: `/api/musicals/${musicalId}`
  })
);