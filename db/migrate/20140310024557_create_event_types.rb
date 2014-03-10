class CreateEventTypes < ActiveRecord::Migration
  def change
    create_table :event_types do |t|
      t.string :name
      t.string :phone
      t.string :email

      t.timestamps
    end

    # populate the table
      EventType.create :name => "fire", :phone => "8326039023", :email => "shaunakv1@gmail.com"
      EventType.create :name => "accident", :phone => "8326039023", :email => "shaunakv1@gmail.com"
      EventType.create :name => "active_shooter", :phone => "8326039023", :email => "shaunakv1@gmail.com"
      EventType.create :name => "flood", :phone => "8326039023", :email => "shaunakv1@gmail.com"
  end
end
