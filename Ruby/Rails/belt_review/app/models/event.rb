class Event < ApplicationRecord
  belongs_to :user
  validates :name, :date, :city, :state, presence: true
  validate :isFuture
  validates :name, :city, length: {minimum: 4}
  has_many :comments
  has_many :attendings
  has_many :users_participations, through: :attendings, source: :user

  def isFuture
      if date < Date.today
          errors.add(:date, "must be in the future")
      end
  end
end
