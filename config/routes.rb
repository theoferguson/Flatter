Rails.application.routes.draw do
  resources :walls
  resources :comments, only: [:create]
  resources :users
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  post '/', to: 'comments#create'
  
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
