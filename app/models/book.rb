class Book < ActiveRecord::Base
  belongs_to :school

  has_attached_file :cover, styles: { thumb: '130x180#' }
  has_attached_file :file

  validates_presence_of :title, :author, :isbn
  validates :file, attachment_presence: true
  validates_attachment_content_type :cover, content_type: %r{\Aimage\/.*\Z}
end
