require 'rails_helper'
feature "User creates an account" do
  before(:each) do 
    visit users_new_path
  end
  scenario "successfully creates a new user" do
    fill_in "name", with: "shane"
    click_button "Sign in"
    expect(page).to have_content "Welcome shane"
    expect(current_path).to eq("/messages")
  end
  scenario "unsuccessfully creates a new user" do 
    click_button "Sign in"
    expect(current_path).to eq("/users/new")
    expect(page).to have_content "Name can't be blank"
    expect(page).to have_content "Name is too short (minimum is 5 characters)"
  end
end