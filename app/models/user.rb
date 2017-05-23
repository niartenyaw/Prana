class User < ApplicationRecord
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, :name, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validate :email_must_be_valid
  after_initialize :ensure_session_token

  attr_reader :password


  # Teams
  has_many :created_teams,
    foreign_key: :creator_id,
    class_name: :Team

  has_many :team_memberships

  has_many :teams,
    through: :team_memberships,
    source: :team

  #Projects
  has_many :created_projects,
    foreign_key: :creator_id,
    class_name: :Project

  has_many :project_memberships

  has_many :projects,
    through: :project_memberships,
    source: :project

  # Tasks
  has_many :created_tasks,
    foreign_key: :creator_id,
    class_name: :Task

  has_many :assigned_tasks,
    foreign_key: :assignee_id,
    class_name: :Task


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      return user
    end

    nil
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save

    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  private

  def email_must_be_valid
    unless self.email =~ /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
      errors[:email] << "Invalid email address"
    end
  end

end
