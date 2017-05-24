class User < ApplicationRecord
  has_secure_password
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :email, uniqueness: { case_sensitive:false }, format: { with: EMAIL_REGEX}
  validates :password, :password_confirmation, presence: true, length: {minimum: 8},  :on => :create
  validates :first_name, :last_name, :email, :city, :state, presence: true

  has_many :events
  has_many :attendings
  has_many :comments, dependent: :destroy
  has_many :participations, through: :attendings, source: :event
  has_many :events_commented, through: :comments, source: :event
end
