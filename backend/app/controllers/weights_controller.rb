class WeightsController < ApplicationController

    def create
        user = current_user
        weight = Weight.new(date: params[:date], weight: params[:weight], user_id: user.id)
        if weight.save
            render json: weight
        else
            render json: {error: 'Weight did not save.' }, status: 400
        end
    end
    
end
