class Dojo < ApplicationRecord
	has_many :students, dependent: :destroy
	validates :branch, :street, :city, :state, presence: true
	validates :state, length: { minimum: 2 }
end
