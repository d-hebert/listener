json.set! playlist.id do
    json.extract! playlist, :id, :title, :author_id, :author_name, :track_ids
    json.cover_art url_for(playlist.cover_art)
end