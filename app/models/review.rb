class Review < ApplicationRecord
  validates :rating, inclusion: { in: (1..5) }

  belongs_to :musical
  foreign_key: :show_id,
  class_name: 'Musical'
end