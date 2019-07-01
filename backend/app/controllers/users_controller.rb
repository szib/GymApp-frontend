class UsersController < ApplicationController
    def show
      user = User.find_by(id: params[:id])
      if user
        render json: user, include: :workouts, except: [:updated_at]
      else
        render json: { error: "User not found."}, status: 404
      end
    end
    
    def signin
      user = User.find_by(name: params[:name])
      if user && user.authenticate(params[:password])
        render json: { name: user.name, token: issue_token({ id: user.id }) }
      else
        render json: { error: 'Invalid username/password combination.' }, status: 401
      end
    end

    def signup
      user = User.new(user_params)
      if user.save 
        render json: { name: user.name, token: issue_token({ id: user.id }) }
      else
        render json: { error: 'That username is taken' }, status: 409
      end
    end

    def validate
      user = current_user
      if user
        render json: { name: user.name, token: issue_token({ id: user.id }) }
      else
        render json: { error: 'User not found.' }, status: 404
      end
    end

    private 
      def user_params
        params.permit(:name, :email, :password)
      end
end