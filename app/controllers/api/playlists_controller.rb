class Api::PlaylistsController < ApplicationController
    def index
        @playlists = Playlist.all 
        render "api/playlists/index"
    end

    def create
        @playlist = Playlist.new( 
            author_id: current_user.id, 
            title: params[:title])
        if @playlist.save!
            @playlists = Playlist.all 
            render "api/playlists/index"
        else 
            render json: ["Log in first!"], status: 404
        end
    end

    def edit
        debugger
        @playlist = Playlist.find(params[playlistId])
        @track_id = params(trackId)
        @playlist.track_ids << @track_id 
        if @playlist.save!
            @playlists = Playlist.all
        else 
            render json: ["Playlist not found!"], status: 404
        end

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