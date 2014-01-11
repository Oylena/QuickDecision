json.array!(@alternatives) do |alternative|
  json.extract! alternative, :id
  json.url alternative_url(alternative, format: :json)
end
