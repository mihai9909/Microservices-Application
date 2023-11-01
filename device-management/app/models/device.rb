class Device < ApplicationRecord
  validates :name, presence: true
end
