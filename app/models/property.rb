# frozen_string_literal: true

class Property < ApplicationRecord
  include AddressVerifiable
  validates :name, presence: true
  validates :headline, presence: true
  validates :description, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :country, presence: true
  validates :street_1, presence: true
  geocoded_by :address
  after_validation :geocode, if: :address_changed?
  monetize :price_cents, allow_nil: true
  has_many_attached :images, dependent: :destroy
  
  def address
    # [street_1, street_2, city, state, country].compact.join(', ')
    [state, country].compact.join(', ')
  end

  def default_image
    images.first
  end
end

File.open('./db/sample/images')
