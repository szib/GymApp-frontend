class UsersController < ApplicationController
  def show
    user = User.find_by(id: params[:id])
    if user
      render json: user, include: :workouts, except: [:updated_at]
    else
      render json: { error: "User not found."}, status: 404
    end
  end
  
  def getUser
    user = current_user
    if user
      render json: user
    else 
      render json: { error: 'Not logged in.'}, status: 404
    end
  end

  def signin
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      render json: { username: user.username, token: issue_token({ id: user.id }) }
    else
      render json: { error: 'Invalid username/password combination.' }, status: 401
    end
  end

  def signup
    user = User.new(user_params)
    if user.save 
      render json: { username: user.username, token: issue_token({ id: user.id }) }
    else
      render json: { error: 'That username is taken' }, status: 409
    end
  end

  def validate
    user = current_user
    if user
      render json: { username: user.username, token: issue_token({ id: user.id }) }
    else
      render json: { error: 'User not found.' }, status: 404
    end
  end

  def update
    user = current_user
    user.update(user_details) 
    render json: user
  end

  private 
    def user_params
      params.permit(:username, :email, :password)
    end

    def user_details
      params.permit(:name, :img, :gender, :height, :goal, :bodyType)
    end
end