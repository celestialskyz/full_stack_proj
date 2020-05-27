json.resvs do
@reservations.each do |reservation|
    json.set! reservation.id do
      json.partial! 'api/reservations/reservation', reservation: reservation
    end
  end
end

json.musicals do 
  @reservations.each do |reservation|
    json.set! reservation.musical.id do
      json.partial! 'api/musicals/musical', musical: reservation.musical
    end
  end
end