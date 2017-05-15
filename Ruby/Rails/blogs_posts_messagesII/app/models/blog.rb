class Blog < ApplicationRecord
	has_many :posts, dependent: :destroy
	has_many :owners, dependent: :destroy

	# all the users that own a specifc blog
  	has_many :users, through: :owners

  	# all the users that posted on a specific blog
  	has_many :user_posts, through: :posts, source: :user

  	validates :name, :description, presence: true

  	has_many :comments, as: :commentable
end
