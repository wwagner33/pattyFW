json.extract! profile, :id, :name, :action, :permission, :created_at, :updated_at
json.url profile_url(profile, format: :json)