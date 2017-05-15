Rails.application.routes.draw do

  get "/users" => "users#index"

  get 'users/new' 

  post 'users' => 'users#create'

  get 'users/total' => 'users#total'

  get 'users/:id' => 'users#show'

  get 'users/:id/edit' => 'users#edit'

  patch 'users/:id' => 'users#update'

end
