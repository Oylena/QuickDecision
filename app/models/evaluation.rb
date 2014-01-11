class Evaluation < ActiveRecord::Base
  has_one :goal
  has_many :criteria
end
