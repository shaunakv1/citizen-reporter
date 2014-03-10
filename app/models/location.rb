class Location < ActiveRecord::Base
	has_many :effects
  	has_many :events, through: :effects

	geocoded_by :address
	after_validation :geocode, :if => :address_changed?
end
