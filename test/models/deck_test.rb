# == Schema Information
#
# Table name: decks
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text             not null
#  creator_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class DeckTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
