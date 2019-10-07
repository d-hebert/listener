class Api::TracksController < ApplicationController
    def show
        @track = Track.find(params[:id])
        load_track(@track)
        render '/api/tracks/show'
    end

    def create
    @track = Track.find(params[:id])
    if @track
      load_track(@track)
      render '/api/tracks/show'
    else
      render json: ["Track cannot be found"], status: 404
    end
  end

end