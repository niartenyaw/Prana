Rails.application.routes.draw do

  namespace :api do
    get 'tasks/index'
  end

  namespace :api do
    get 'tasks/show'
  end

  namespace :api do
    get 'tasks/create'
  end

  namespace :api do
    get 'tasks/update'
  end

  namespace :api do
    get 'tasks/destroy'
  end

  root to: 'static_pages#index'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :teams, except: [:new, :edit]
    resources :projects, except: [:new, :edit]
  end

end
