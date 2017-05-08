class UserActivitySerializer < ActiveModel::Serializer
  attributes :id, :activity_id, :user_id, :date, :local, :status, :created_at
end