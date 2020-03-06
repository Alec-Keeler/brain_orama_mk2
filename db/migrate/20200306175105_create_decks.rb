class CreateDecks < ActiveRecord::Migration[5.2]
  def change
    create_table :decks do |t|
      t.string :name, null:false
      t.text :description, null:false
      t.integer :subject_id, null:false
      t.integer :creator_id, null:false

      t.timestamps
    end

    add_index :decks, :subject_id
    add_index :decks, :creator_id
  end
end
