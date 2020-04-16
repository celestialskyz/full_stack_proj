    json.set! reservation.id do
      json.extract! reservation, :show_id, :reserver_id, :party_size, :date, :time
    end

#json.musical do 
 #   @musicals.each do |musical|
  #    json.set! musical.id do
   #     json.extract! musical. :id, :name
   #   end
    #end
 # end