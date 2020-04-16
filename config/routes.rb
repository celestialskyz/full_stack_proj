
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index] do 
      resources :reservations, only: [ :index, :show, :destroy, :update ]
    end
    resource :session, only:[:create, :destroy]
    resources :musicals, only:[:index, :show]
    resources :reservations, only: [:create]
  end
end
