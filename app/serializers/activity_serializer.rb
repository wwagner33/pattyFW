class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :laboratory_id, :name, :description, :created_at
end