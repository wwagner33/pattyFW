class LaboratorySerializer < ActiveModel::Serializer
  attributes :id, :subject_id, :name, :local, :local_server, :created_at
end