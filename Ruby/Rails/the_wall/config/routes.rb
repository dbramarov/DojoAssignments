Rails.application.routes.draw do
	
  get 'users/new' => 'users#login'

  post 'users' => 'users#new'

  get 'users/logout' => 'users#logout'

  get 'messages' => 'messages#index'

  post 'messages' => 'messages#new'

  post 'messages/:id' => 'messages#comment'

end
