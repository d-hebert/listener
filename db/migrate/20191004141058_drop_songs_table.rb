class DropSongsTable < ActiveRecord::Migration[5.2]
  def up
    drop_table :songs
  end
end
