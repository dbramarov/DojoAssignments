require 'rails_helper'
describe UsersController, type: :controller do
  it "routes /users to the users controller" do
    expect(:get => "/users/new").to route_to(:controller => "users", :action => "login")
  end
end