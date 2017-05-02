Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  resources :profiles
  resources :subjects
  resources :laboratories
  resources :users
  resources :widgets
  resources :activities
  resources :lab_widgets
  resources :user_activities
  resources :user_profiles
  resources :context_users
  resources :context_widgtes
end
