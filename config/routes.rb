Rails.application.routes.draw do
  resources :walls 
  resources :comments, only: [:index, :show, :create]
  resources :users, only: [:index]

  post '/', to: 'comments#create'
  get '/', to: 'comments#index'


  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  post '/', to: 'comments#create'
  get '/', to: 'comments#index'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
