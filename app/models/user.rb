class User < ApplicationRecord
    has_secure_password

    has_one :wall
    has_many :comments, through: :wall

    validates :username, presence: true
    validates :username, uniqueness: true

    private

    def build_default_wall
        build_wall
        true
    end
end
