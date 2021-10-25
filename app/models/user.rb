class User < ApplicationRecord
    has_secure_password

    has_one :wall
    has_many :comments, through: :wall

    validates :username, presence: true
    validates :username, uniqueness: true
end
