    json.set! reservation.id do
      json.extract! reservation, :id, :show_id, :reserver_id, :party_size, :date, :time
    end