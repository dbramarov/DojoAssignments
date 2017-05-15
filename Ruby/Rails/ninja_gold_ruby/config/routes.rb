Rails.application.routes.draw do
  root 'rpg#index'

  post '/process' => 'rpg#new'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
