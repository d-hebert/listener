class UpdateTrackIdsInAlbums < ActiveRecord::Migration[5.2]
  def change
    remove_column:albums, :track_ids
    add_column :albums, :track_ids, :integer, array: true, null: false
  end
end
