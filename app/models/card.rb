# == Schema Information
#
# Table name: cards
#
#  id         :bigint           not null, primary key
#  question   :string           not null
#  answer     :text             not null
#  author_id  :integer          not null
#  deck_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Card < ApplicationRecord

    belongs_to :deck,
        foreign_key: :deck_id,
        class_name: :Deck

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
end
