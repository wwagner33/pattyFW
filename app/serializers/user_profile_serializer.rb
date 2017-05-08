class UserProfileSerializer < ActiveModel::Serializer
  attributes :id, :profile_id, :user_id, :laboratory_id, :created_at
end