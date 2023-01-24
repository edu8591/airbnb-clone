class Review < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true
  belongs_to :reviewable, polymorphic: true, counter_cache: true
  validates :rating, presence: true, numericality: { in: 1..5, only_integer: true }

  after_commit :update_average_rating, on: %i[create update]

  def update_average_rating
    reviewable.update!(average_rating: reviewable.reviews.average(:rating))
  end
end
