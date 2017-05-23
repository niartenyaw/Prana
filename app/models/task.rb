class Task < ApplicationRecord
  validates :name, :creator, :assignee, :project, presence: true
  validates :finished, inclusion: { in: [true, false] }
  before_validation :ensure_assignee_id

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User

  belongs_to :assignee,
    foreign_key: :assignee_id,
    class_name: :User

  belongs_to :project

  def ensure_assignee_id
    self.assignee_id ||= self.creator_id
  end
end
