class Student < ActiveRecord::Base
  belongs_to :school

  validates_presence_of :code
end
