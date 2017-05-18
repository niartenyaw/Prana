Rails.application.routes.draw do

  root to: 'static_pages#index'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :teams, only: [:create, :update, :destroy]
  end

end
