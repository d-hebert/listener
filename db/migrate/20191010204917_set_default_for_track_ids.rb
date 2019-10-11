class SetDefaultForTrackIds < ActiveRecord::Migration[5.2]
  def change
    remove_column :playlists, :track_ids
    add_column :playlists, :track_ids, :integer, array: true, default: []
  end
end
