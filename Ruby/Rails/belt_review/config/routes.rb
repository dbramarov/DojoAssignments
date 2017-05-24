Rails.application.routes.draw do
  root 'users#index'
  post 'users/register' => 'users#register'
  get 'users/:id' => 'users#edit'
  patch 'users/update' => 'users#update'
  post 'users/login' => 'users#login'
  delete 'users/logout' => 'users#logout'

  get 'events' => 'events#index'
  post 'events/new' => 'events#new'
  get 'events/:id' => 'events#show'
  delete 'delete/:id' => 'events#delete'
  get 'events/edit/:id' => 'events#edit'
  patch 'events/update/:id' => 'events#update'
  get 'events/join/:id' => 'events#join'
  get 'events/cancel/:id' => 'events#cancel'

  post 'comments/:id' => 'comments#new'
end
