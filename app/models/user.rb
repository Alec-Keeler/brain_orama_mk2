# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :first_name, :last_name, :session_token, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :email, format: {with: URI::MailTo::EMAIL_REGEXP}
    validates :email, uniqueness: true

    before_validation :ensure_session_token

    attr_reader :password

    has_many :decks,
        foreign_key: :creator_id,
        class_name: :Deck

    has_many :cards,
        foreign_key: :author_id,
        class_name: :Card

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return user if user && user.is_password?(password)
        nil
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64(16)
    end

    def reset_session_token
        self.session_token = SecureRandom::urlsafe_base64(16)
        self.save
        self.session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
end
