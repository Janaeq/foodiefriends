# for future implementation

class Direction < ApplicationRecord
    belongs_to :post
    validates :direction, presence: true
end