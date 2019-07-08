class Weight < ApplicationRecord
  belongs_to :user

  validates :weight, numericality: { greater_than: 29, less_than: 301 }
end
