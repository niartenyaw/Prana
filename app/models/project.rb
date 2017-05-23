class Project < ApplicationRecord
  validates :creator, :team, :name, presence: true

  # Teams
  belongs_to :team


  # Users and Members
  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User

  has_many :project_memberships

  has_many :project_members,
    through: :project_memberships,
    source: :user

  # Tasks
  has_many :tasks

end
