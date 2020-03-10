class RemoveSubjectIdFromDecks < ActiveRecord::Migration[5.2]
  def change
    remove_column :decks, :subject_id, :integer
  end
end
