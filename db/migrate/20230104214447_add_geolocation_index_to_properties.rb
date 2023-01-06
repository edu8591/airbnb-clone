class AddGeolocationIndexToProperties < ActiveRecord::Migration[7.0]
  def change
    add_index :properties, %i[latitude longitude]
  end
end
