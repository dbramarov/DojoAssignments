require 'rails_helper'
feature "User creates a message" do
  before(:each) do 
    visit "/users/new"
    fill_in "name", with: "shane"
    click_button "Sign in"
  end
  scenario "successfully creates a message" do
    fill_in "message", with: "This is a message meng"
    click_button "Post a message"
    expect(page).to have_content "This is a message meng"
    expect(current_path).to eq("/messages")
  end
  scenario "unsuccessfully creates a message" do 
    click_button "Post a message"
    expect(current_path).to eq("/messages")
    expect(page).to have_content "Message can't be blank"
    expect(page).to have_content "Message is too short (minimum is 10 characters)"
  end
  scenario "Contain Logout button" do
    find_link('Logout').visible?
    click_link "Logout"
    expect(current_path).to eq("/users/new")
  end
end
0