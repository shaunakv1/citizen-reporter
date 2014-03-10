class CreateStatuses < ActiveRecord::Migration
  def change
    create_table :statuses do |t|
      t.string :value

      t.timestamps
    end
    # populate the table
      Status.create :value => "pending"
      Status.create :value => "verified"
  end
end
