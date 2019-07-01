class WorkoutsController < ApplicationController

    def create
        workout = Workout.new(date: params[:created_at])
        if workout.save
            render json: workout
        else
            render json: {error: 'Workout did not save.' }, status: 400
        end
    end

    def populate params
        params[:exercises].each do |exercise_data|
            exercise = Exercise.create(workout: workout)
            exercise_data[:lifts].each do |lift_data|
                lift = Lift.create( lift_data
                lift.exercise = exercise
                lift.save
            end
        end
    end
end