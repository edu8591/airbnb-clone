# frozen_string_literal: true

class Property < ApplicationRecord
  validates :name, presence: true
  validates :headline, presence: true
  validates :description, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :country, presence: true
  validates :street_1, presence: true
  geocoded_by :address
  after_validation :geocode, if: :address_changes?

  def address
    # [street_1, street_2, city, state, country].compact.join(', ')
    [state, country].compact.join(', ')
  end

  private

  def address_changes?
    street_1_changed? || street_2_changed? || city_changed? || state_changed? || country_changed?
  end
end
