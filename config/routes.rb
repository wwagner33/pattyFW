Rails.application.routes.draw do
  resources :context_widgets
  resources :context_users
  resources :user_profiles
  resources :user_activities
  resources :lab_widgets
  resources :activities
  resources :widgets
  resources :users
  resources :laboratories
  resources :subjects
  resources :profiles
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
