class ContextUserSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :user_activity_id, :local, :created_at
end