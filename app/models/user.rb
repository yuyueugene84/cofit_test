class User < ActiveRecord::Base

  has_secure_password validations: false

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: { case_sensitive: false }
  validates :password, presence: true, on: :create, length: {minimum: 5}

end
