class ChangeSongsToTracks < ActiveRecord::Migration[5.2]
  def change
    rename_column :albums, :song_ids, :track_ids
    rename_column :playlists, :song_ids, :track_ids
  end
end
