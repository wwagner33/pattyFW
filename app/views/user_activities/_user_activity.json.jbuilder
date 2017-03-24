json.extract! user_activity, :id, :date, :local, :status, :activity, :user, :created_at, :updated_at
json.url user_activity_url(user_activity, format: :json)