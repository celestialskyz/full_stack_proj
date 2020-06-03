export const fetchReservations = (userId) => {
  return(
    $.ajax({
    method: "GET",
    url: `/api/users/${userId}/reservations`
  })
  );

};

export const fetchReservation = (userId, reservationId) => (
  $.ajax({
    method: "GET",
    url: `/api/users/${userId}/reservations/${reservationId}`
  })
);

export const createReservation = (reservation) =>{
  return($.ajax({
    method:"POST",
    url:`/api/reservations`,
    data: {reservation}
  })
);
};

export const updateReservation =(userId, reservation)=>{
  return(
  $.ajax({
    method:"PATCH",
    url:`/api/users/${userId}/reservations/${reservation.id}`,
    data: {reservation}
  })
  );
  // debugger
};

export const deleteReservation = (userId, reservationId) =>(
  $.ajax({
    method:"DELETE",
    url:`/api/users/${userId}/reservations/${reservationId}`,
   })
);