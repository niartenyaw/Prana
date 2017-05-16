Rails.application.routes.draw do

  get 'sessions/create'

  get 'sessions/destroy'

  get 'users/create'

  get 'users/destroy'

  root to: 'static_pages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
