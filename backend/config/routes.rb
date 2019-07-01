Rails.application.routes.draw do
  resources :users, only: [:show]
  resources :lifts
  resources :exercies
  resources :workouts
  resources :weights
  post '/signin', to: 'users#signin'
  post '/signup', to: 'users#signup'
  get '/validate', to: 'users#validate'
end
