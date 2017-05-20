Rails.application.routes.draw do

  get 'likes/create'

  get 'likes/destroy'

  get 'users/login' => 'users#login'

  post 'users/login' => 'users#check'

  get 'users/edit' => 'users#edit'

  patch 'users/update' => 'users#update'

  post 'users/register' => 'users#register'

  get 'users/:id' => 'secrets#index'

  delete 'users/:id/delete' => 'users#delete'

  delete 'logout' => 'users#logout'

  delete 'secrets/:id/delete' => 'secrets#delete'

  post 'secrets' => 'secrets#create'

  get 'secrets/all' => 'secrets#all'

  post 'likes/:id' => 'likes#create'

  delete 'likes/:id/delete' => 'likes#destroy'

end
