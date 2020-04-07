class User < ApplicationRecord
  validates :email, presence:true, uniqueness:true
  validates :first_name, :last_name, presence:true

  validates :password_digest, :session_token, presence:true
  validates :password, length:{minimum:6}, allow_nil:true
  attr_reader :password
  after_initialize :ensure_session_token

  #FGRIPE
  def self.find_by_credentials(email, password)
    user = User.find_by(email:email)
    if user && user.is_password?(password)
      return user
    end
    nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    token = self.class.generate_session_token
    self.update(session_token: token)
    token
  end

  def is_password?(password) 
   bc_pdig= BCrypt::Password.new(self.password_digest)
   bc_pdig.is_password?(password)
  end
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
  
  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

end
