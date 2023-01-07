class Profile < ApplicationRecord
  belongs_to :user

  geocoded_by :address, if: -> { address.present? && :address_changes? }

  def address
    [street_1, street_2, city, state, country].compact.join(', ')
  end

  private

  def address_changes?
    street_1_changed? || street_2_changed? || city_changed? || state_changed? || country_changed?
  end
end
