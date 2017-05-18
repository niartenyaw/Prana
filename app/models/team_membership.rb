class TeamMembership < ApplicationRecord
  validates :team, :user, presence: true

  belongs_to :user
  belongs_to :team
end
