class Team < ApplicationRecord
  validates :name, :creator, presence: true

  # Users
  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User
  has_many :team_memberships
  has_many :users,
    through: :team_memberships,
    source: :user

  # Projects
  has_many :projects
end
