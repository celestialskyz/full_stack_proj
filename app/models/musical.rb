class Musical < ApplicationRecord
  validates :name,:website,:lat, :lng, presence:true
  validates :city, uniqueness:{scope: :state}
  validates :lottery, inclusion: { in: [true, false] }
  validates :description, :max_cap, presence:true
end
