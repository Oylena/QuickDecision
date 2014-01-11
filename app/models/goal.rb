class Goal < ActiveRecord::Base
  has_one :project
  belongs_to :criteria
  belongs_to :evaluation
end
