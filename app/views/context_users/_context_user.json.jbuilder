json.extract! context_user, :id, :local, :user, :useractivity, :created_at, :updated_at
json.url context_user_url(context_user, format: :json)