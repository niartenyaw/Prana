class ProjectMembership < ApplicationRecord
  validates :user, :project, presence: true
  validates_uniqueness_of :user, scope: :project

  belongs_to :user
  
  belongs_to :project
end
