Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:new, :create, :show, :index]
    resources :tracks, only: [:show]
    resource :session, only: [:new, :create, :show, :destroy]
  end

  root "static_pages#root"

end
