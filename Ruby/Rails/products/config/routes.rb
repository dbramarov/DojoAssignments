Rails.application.routes.draw do
  # get 'products/index'
  # post 'products' => 'products#create'
  get 'hello' => 'products#hello'
  get "say/hello(/:name)" => "displays#say"
  get "times" => "displays#times"
  get "times/restart" => "displays#restart"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
