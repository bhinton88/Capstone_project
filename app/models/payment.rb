class Payment < ApplicationRecord
  belongs_to :order

  private

#  want to create some validation that makes sure that status is either complete or not complete
end
