class LiftsController < ApplicationController

    def create
        lift = Lift.new(reps: params[:reps], weight: params[:weight])
        if lift.save
            render json: lift
        else
            render json: {error: 'Lift did not save.' }, status: 400
        end
    end

end