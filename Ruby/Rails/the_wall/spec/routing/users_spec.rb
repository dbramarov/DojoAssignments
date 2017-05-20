require "rails_helper"
describe UsersController, type: :controller do
  describe "routing" do
    it "routes to login page" do
      expect(post("users")).to route_to("users#new")
    end
  end
end