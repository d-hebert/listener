class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.integer :song_ids, array: true, null: false
      t.timestamps
    end
    add_index :playlists, :title
    add_index :playlists, :author_id
  end
end
