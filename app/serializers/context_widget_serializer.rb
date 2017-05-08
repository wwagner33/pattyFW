class ContextWidgetSerializer < ActiveModel::Serializer
  attributes :id, :lab_widget_id, :user_activity_id, :value, :created_at
end