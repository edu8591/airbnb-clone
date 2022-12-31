Rails.application.routes.draw do
  devise_for :users, skip: %i[registrations sessions]
  as :user do
    # registrations
    get 'users/cancel', to: 'devise/registrations#cancel', as: 'cancel_user_registration'
    get 'users/edit', to: 'devise/registrations#edit', as: 'edit_user_registration'
    patch 'users', to: 'devise/registrations#update', as: 'user_registration'
    put 'users', to: 'devise/registrations#update', as: ''
    delete 'users', to: 'devise/registrations#destroy', as: ''
    post 'users', to: 'devise/registrations#create', as: ''
    # sessions
    post '/users/sign_in', to: 'devise/sessions#create', as: 'user_session'
    delete '/users/sign_out', to: 'devise/sessions#destroy', as: 'destroy_user_session'
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      get 'users_by_email', to: 'users_by_emails#show', as: 'users_by_email'
    end
  end
  # Defines the root path route ("/")
  root 'home#index'
end
