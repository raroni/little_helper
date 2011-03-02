LittleHelper::Application.routes.draw do
  resources :todos

  root :to => "welcome#index"
end
