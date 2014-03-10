class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.references :event_type, index: true
      t.float :latitude
      t.float :longitude
      t.string :address
      t.integer :accuracy
      t.integer :vote
      t.references :status, index: true

      t.timestamps
    end
  end
end
