class WorkoutsController < ApplicationController

    def create
        workout = Workout.new(date: params[:created_at])
        if workout.save
            render json: workout
        else
            render json: {error: 'Workout did not save.'}, status: 400
        end
    end

    def populate
        currentUser_id = User.find_by(username: params[:data][0]["username"]).id
        workout = Workout.create(user_id: currentUser_id, date: params[:data][0][:date])
        params[:data].each do |exercise_data|
            exercise = Exercise.create(workout_id: workout.id, name: exercise_data[:exercise])
            exercise_data[:reps].each_with_index do |rep, index|
                Lift.create(exercise_id: exercise.id, reps: rep, weight: exercise_data[:weights][index])
            end
        end   
        render json: workout
    end

    def workoutsList
        # user = current_user
        user = User.last
        if user
            render :json => user.workouts.to_json(:include => {:exercises => {:include => {:lifts => {:except  => [:created_at, :updated_at, :id, :exercise_id]}}, :except => [:created_at, :updated_at, :workout_id, :id]}}, :except => [:created_at, :updated_at, :user_id])
        else
          render json: { error: 'No user identified' }, status: 400
        end
    end
end