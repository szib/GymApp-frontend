class Weight < ApplicationRecord
  belongs_to :user

  validates :weight, numericality: { greater_than: 30,  only_integer: true }
end
