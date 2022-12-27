Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      # resources :users, only: [:show]
      get 'users/:email', to: 'users#show', as: 'user'
    end
  end
  # Defines the root path route ("/")
  root 'home#index'
end
