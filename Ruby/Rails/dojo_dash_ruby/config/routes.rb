Rails.application.routes.draw do

  get 'dojos' => 'dojos#index'

  get 'dojos/new' => 'dojos#new'

  post 'dojos' => 'dojos#create'

  get 'dojos/:id' => 'dojos#show'

  get 'dojos/:id/edit' => 'dojos#edit'

  patch 'dojos/:id' => 'dojos#update'

  delete 'dojos/:id' => 'dojos#destroy'

  #************************************************

  get 'dojos/:id/students' => 'students#index'

  get 'students/:id/new' => 'students#new'

  post 'dojos/:id/students' => 'students#create'

  get 'students/:id' => 'students#show'

  delete 'students/:id' => 'students#destroy'

  get 'students/:id/edit' => 'students#edit'

  post 'students/:id' => 'students#update'
end
