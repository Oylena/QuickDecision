class Project < ActiveRecord::Base
  belongs_to :alternative
  belongs_to :goal
end
