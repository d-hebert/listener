json.set! playlist.id do
    json.extract! playlist, :id, :title, :author_id, :author_name, :track_ids, :tracks
        if playlist.id < 7
            json.cover_art url_for(playlist.cover_art) 
        else  
            json.cover_art "blank" 
        end
end