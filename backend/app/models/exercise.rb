class Exercise < ApplicationRecord
  belongs_to :workouts
  has_many :lifts
end
