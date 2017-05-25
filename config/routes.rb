Rails.application.routes.draw do

  root to: 'static_pages#index'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create]
    resource :session, only: [:create, :destroy]
    resources :teams, except: [:new, :edit]
    resources :projects, except: [:new, :edit]
    resources :tasks, except: [:new, :edit]
  end

end
