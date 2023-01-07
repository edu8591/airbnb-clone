class ChangeStreet2ColumnDefaultForProfiles < ActiveRecord::Migration[7.0]
  def change
    change_column_default :profiles, :street_2, nil
  end
end
