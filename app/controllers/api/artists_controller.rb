class Api::ArtistsController < ApplicationController
    def index
        @artists = Artist.all 
        render "api/artists/index"
    end

    def show
        @artist = Artist.find(params[:id])
        if @artist 
            @tracks = @artist.tracks
            @albums = @artist.albums
            render "api/artists/show"
        else 
            render json: ["Album cannot be found"], status: 404
        end
    end
end