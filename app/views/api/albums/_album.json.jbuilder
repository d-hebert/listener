json.set! album.id do
    json.extract! album, :id, :title, :artist_id, :artist_name, :track_ids
    json.cover_art url_for(album.cover_art)
end