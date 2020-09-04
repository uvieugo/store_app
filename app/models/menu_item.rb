class MenuItem < ApplicationRecord
  belongs_to :menu_class
  has_many :menu_options
  has_many :condiments, through: :menu_options
end
