json.array!(@events) do |event|
  json.extract! event, :id, :event_type_id, :latitude, :longitude, :address, :accuracy, :vote, :status_id
  json.url event_url(event, format: :json)
end
