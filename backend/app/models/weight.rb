class Weight < ApplicationRecord
  belongs_to :user

  validates :weight, numericality: { greater_than: 59, less_than: 701 }
end
