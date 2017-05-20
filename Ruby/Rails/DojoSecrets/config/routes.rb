Rails.application.routes.draw do

  get 'likes/create'

  get 'likes/destroy'

  get 'secrets/index'

  get 'sessions/new' => 'sessions#new'

  delete 'sessions/:id' => 'sessions#destroy'

  post 'sessions/login' => 'sessions#login'

  post 'sessions/create' => 'sessions#create'

  get 'users/new' => 'users#new'

  get 'users/show'

  get 'users/edit'

  get 'users/:id' => 'users#show'

end
