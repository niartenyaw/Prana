class Project < ApplicationRecord
  validates :creator, :team, :name, presence: true

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User

  belongs_to :team

end
