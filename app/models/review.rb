class Review < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true
  belongs_to :reviewable, polymorphic: true
  validates :rating, presence: true, numericality: { in: 1..5, only_integer: true }
end
