class RemoveTrackIdsFromAlbums < ActiveRecord::Migration[5.2]
  def change
    remove_column :albums, :track_ids
  end
end
