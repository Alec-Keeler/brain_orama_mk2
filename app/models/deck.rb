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
class Deck < ApplicationRecord
    validates :name, :description, presence: true

    belongs_to :creator,
        foreign_key: :creator_id,
        class_name: :User
        
    has_many :cards,
        foreign_key: :deck_id,
        class_name: :Card

end
