class CreateEffects < ActiveRecord::Migration
  def change
    create_table :effects do |t|
      t.references :event, index: true
      t.references :location, index: true

      t.timestamps
    end
  end
end
