json.extract! user, :id, :name, :login, :password, :tag, :email, :created_at, :updated_at
json.url user_url(user, format: :json)