class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :name, :action, :permission, :created_at
end