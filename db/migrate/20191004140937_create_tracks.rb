class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.integer :album_id, null: false
      t.integer :artist_id, null: false
      t.timestamps
    end
    add_index :tracks, :title
    add_index :tracks, :album_id
    add_index :tracks, :artist_id
  end
end
