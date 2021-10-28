class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :full_name, :program, :hometown, :image_url, :password_digest, :bio, :friends
end
