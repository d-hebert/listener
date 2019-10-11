class Api::AlbumsController < ApplicationController
    def index
        @albums = Album.all 
        render "api/albums/index"
    end

    def show
        @album = Album.find(params[:id])
        if @album 
            @tracks = @album.tracks
            render "api/albums/show"
        else 
            render json: ["Album cannot be found"], status: 404
        end
    end
end