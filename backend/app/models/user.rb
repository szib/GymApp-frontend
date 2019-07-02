class User < ApplicationRecord
    has_many :weights
    has_many :workouts
    has_many :exercises, through: :workouts
    has_many :lifts, through: :exercises
    
    # validates :email, uniqueness: true
    validates :email, presence: true
    # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :username, presence: true
    validates :username, uniqueness: true
    validates :password, presence: true
    has_secure_password
end
