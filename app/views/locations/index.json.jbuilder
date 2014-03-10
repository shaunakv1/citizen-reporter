json.array!(@locations) do |location|
  json.extract! location, :id, :address, :latitude, :longitude, :phone, :site_type, :site_name, :city, :zip_code
  json.url location_url(location, format: :json)
end
