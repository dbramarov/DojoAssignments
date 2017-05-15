class User < ApplicationRecord
	EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
	has_many :owners, dependent: :destroy
	has_many :posts, dependent: :destroy
	has_many :messages, dependent: :destroy
	# all the blogs owned by a specific user
	has_many :blogs, through: :owners
	# all the blogs a user has posted on
	has_many :blog_posts, through: :posts, source: :blog
  	has_many :comments, as: :commentable

  	validates :email_address, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
  	validates :first_name, :last_name, :email_address, presence: true
end
