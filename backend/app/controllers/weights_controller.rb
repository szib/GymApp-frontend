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
    
    def weightsList
        user = current_user
        if user
            render :json => user.weights, except: [:created_at, :updated_at, :user_id]
        else
          render json: { error: 'No user identified' }, status: 400
        end
    end

end
