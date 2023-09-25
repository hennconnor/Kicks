Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
get 'shoes', to: 'shoes#index'
resource :shoes
  # Defines the root path route ("/")
  # root "articles#index"
end
