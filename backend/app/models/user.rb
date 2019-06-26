class User < ApplicationRecord
    has_many :workouts
    has_many :exercises, :through => :workouts
    has_many :lifts, :through => :exercises
    has_many :weights

    has_secure_password
end
