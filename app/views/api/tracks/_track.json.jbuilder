json.currentTrack do   
    json.extract! track, :id, :title, :artist_id, :album_id
    json.url url_for(track.file)
    json.artist_name track.artist.name
    json.cover_art url_for(track.album.cover_art)
end
