class Todo < ActiveRecord::Base
  validates :description, :presence => true
  attr_accessible :description
end
