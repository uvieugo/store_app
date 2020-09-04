Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    namespace :v1 do 
      resources :menu_items
      resources :menu_types
      resources :menu_classes
      resources :sessions, only: [:create, :destroy]
      resources :condiments
      resources :menu_options
      resources :orders, only: [:create, :index, :update]
      get '/verify', to: 'custom#verify_transaction'
    end
  end
end
