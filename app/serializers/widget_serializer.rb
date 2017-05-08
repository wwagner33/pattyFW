class WidgetSerializer < ActiveModel::Serializer
  attributes :id, :type, :rule, :created_at
end