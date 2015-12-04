Rails.application.routes.draw do
  root 'books#index'

  devise_for :schools
  resources :books, only: [:index, :new, :create] do
    post :download, on: :collection
  end
  resources :students, only: [:new, :create]
end
