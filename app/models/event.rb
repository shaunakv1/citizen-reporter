class Event < ActiveRecord::Base
  belongs_to :event_type
  belongs_to :status
  has_many :effects, :dependent => :destroy
  has_many :locations, through: :effects
  
  reverse_geocoded_by :latitude, :longitude
  after_validation :reverse_geocode,  :if => :latitude_changed? or :longitude_changed?
  default_scope order('updated_at DESC')

end
