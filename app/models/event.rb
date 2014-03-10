class Event < ActiveRecord::Base
  belongs_to :event_type
  belongs_to :status
  
  reverse_geocoded_by :latitude, :longitude
  after_validation :reverse_geocode,  :if => :latitude_changed? or :longitude_changed?
  default_scope order('updated_at DESC')

end
