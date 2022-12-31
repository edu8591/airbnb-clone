class AddStreetColumnsToProperties < ActiveRecord::Migration[7.0]
  def change
    add_column :properties, :street_1, :string
    add_column :properties, :street_2, :string
  end
end
