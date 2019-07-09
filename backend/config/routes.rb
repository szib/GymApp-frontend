Rails.application.routes.draw do
  resources :users
  resources :lifts
  resources :exercies
  resources :workouts
  resources :weights
  post '/signin', to: 'users#signin'
  post '/signup', to: 'users#signup'
  get '/validate', to: 'users#validate'
  get '/workoutsList', to: 'workouts#workoutsList'
  post '/populate', to: 'workouts#populate'
  post '/weight', to: 'weights#create'
  get '/weightsList', to: 'weights#weightsList'
  patch '/userDetails', to: 'users#update'
  get '/getUser', to: 'users#getUser'
end
