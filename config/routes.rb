Rails.application.routes.draw do
  resources :walls 
  resources :comments, only: [:index, :show, :create, :destroy]
  resources :users

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  get '/me/friends', to: 'users#friends'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/allprofiles/:id', to: 'users#profile'
  


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  
end
