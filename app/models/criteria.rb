class Criteria < ActiveRecord::Base
  has_one :goal
  belongs_to :evaluation
end
