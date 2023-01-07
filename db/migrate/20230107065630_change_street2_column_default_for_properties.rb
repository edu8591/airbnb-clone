class ChangeStreet2ColumnDefaultForProperties < ActiveRecord::Migration[7.0]
  def change
    change_column_default :properties, :street_2, nil
  end
end
