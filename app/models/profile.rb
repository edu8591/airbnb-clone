class Profile < ApplicationRecord
  include AddressVerifiable
  belongs_to :user
  geocoded_by :address
  after_validation :geocode, if: -> { :address.present? && :address_changed? }
end
