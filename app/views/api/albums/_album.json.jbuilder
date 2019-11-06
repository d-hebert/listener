json.set! album.id do
    json.extract! album, :id, :title, :artist_id, :artist_name, :tracks
    json.cover_art url_for(album.cover_art)
end