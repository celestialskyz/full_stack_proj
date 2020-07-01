class Musical < ApplicationRecord
  validates :name,:website,:lat, :lng, presence:true
  
  validates :city, :state, :category, presence:true
  validates :lottery, inclusion: { in: [true, false] }
  validates :description, :max_cap, presence:true
  
  has_many_attached :photos
  
  include PgSearch::Model

  pg_search_scope :search_it, against: [:name, :city, :state, :category,:description, :country]
  
  has_many :reservations,
  foreign_key: :show_id,
  class_name: 'Reservation'

  has_many :reviews,
  foreign_key: :musical_id,
  class_name: 'Review'

  # def self.text_search(query)
  #   filtered=[]
  #   filtered.push(self.where("similarity(name, ?) > 0.3", query).order("similarity(name, #{ActiveRecord::Base.connection.quote(query)}) DESC"))
  #   filtered.push(self.where("similarity(city, ?) > 0.3", query).order("similarity(city, #{ActiveRecord::Base.connection.quote(query)}) DESC"))
  #   filtered.push(self.where("similarity(state, ?) > 0.3", query).order("similarity(state, #{ActiveRecord::Base.connection.quote(query)}) DESC"))
  #   filtered.push(self.where("similarity(category, ?) > 0.3", query).order("similarity(category, #{ActiveRecord::Base.connection.quote(query)}) DESC"))
  #   filtered.push(self.where("similarity(description, ?) > 0.3", query).order("similarity(description, #{ActiveRecord::Base.connection.quote(query)}) DESC"))
  #   filtered  
  # end
  def average_rating
    reviews.average(:rating)
  end

end
# validates :city, uniqueness:{scope: :state}