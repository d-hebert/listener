class Api::TracksController < ApplicationController
    def show
        @track = Track.find(params[:id])
        load_track(@track)
        render '/api/tracks/show'
    end
end