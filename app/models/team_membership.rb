class TeamMembership < ApplicationRecord
  validates :team, :user, presence: true
  validates_uniqueness_of :user, scope: :team

  belongs_to :user
  belongs_to :team
end
