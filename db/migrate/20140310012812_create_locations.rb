class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :address
      t.float :latitude
      t.float :longitude
      t.string :phone
      t.string :site_type
      t.string :site_name
      t.string :city
      t.integer :zip_code

      t.timestamps
    end
  end
end
