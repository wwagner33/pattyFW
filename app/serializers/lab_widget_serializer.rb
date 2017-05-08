class LabWidgetSerializer < ActiveModel::Serializer
  attributes :id, :widget_id, :laboratory_id, :name, :rule, :status, :created_at
end