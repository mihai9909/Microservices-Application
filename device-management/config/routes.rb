Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
  
  resources :devices, only: [:index, :create, :update, :destroy, :show]
  get "users/:user_id/devices" => "devices#user_devices"
  delete "users/:user_id/devices" => "devices#delete_user_devices"


  get "hello" => "hello#hello"

  # Defines the root path route ("/")
  # root "posts#index"
end
