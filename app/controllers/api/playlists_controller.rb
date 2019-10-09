class Api::PlaylistsController < ApplicationController
    def index
        @playlists = Playlist.all 
        render "api/playlists/index"
    end

    def show
        @playlist = Playlist.find(params[:id])
        if @playlist 
            @tracks = @playlist.tracks
            render "api/playlist/show"
        else 
            render json: ["Playlist cannot be found"], status: 404
        end
    end
end