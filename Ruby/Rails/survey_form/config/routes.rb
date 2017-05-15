Rails.application.routes.draw do
  get 'forms/index'

  post 'form' => 'forms#form_sub'

  get 'forms/result' => 'forms#result'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
