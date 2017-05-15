class Post < ApplicationRecord
  	belongs_to :blog
  	belongs_to :user
	has_many :messages, dependent: :destroy
  	has_many :comments, as: :commentable

	validates :content, :title, presence: true
end
