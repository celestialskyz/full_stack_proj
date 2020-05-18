class Reservation < ApplicationRecord
  validates :show_id, :reserver_id, :party_size, :date, :time, presence:true

  belongs_to :user,
  foreign_key: :reserver_id,
  class_name: 'User'
  
  belongs_to :musical,
  foreign_key: :show_id,
  class_name: 'Musical'



  class DateError < StandardError
    def message
      "There is no availability for that time."
    end 
  end

end

#reservationMusical = {} 
# reservationMusical[:show_id] = 
