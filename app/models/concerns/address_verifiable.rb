module AddressVerifiable
  extend ActiveSupport::Concern

  included do
    def address
      [street_1, street_2, city, state, zip_code, country].compact.join(', ')
    end
    private
    def address_changed?
      street_1_changed? || street_2_changed? || city_changed? || state_changed? || country_changed?
    end
  end
end
