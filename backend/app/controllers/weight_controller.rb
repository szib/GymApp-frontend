class LiftsController < ApplicationController

    def create
        weight = Weight.new(weight: params[:weight], date: params[:created_at])
        if weight.save
            render json: weight
        else
            render json: {error: 'Weight did not save.' }, status: 400
        end
    end

end