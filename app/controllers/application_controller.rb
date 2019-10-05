class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?, :current_track, :track_loaded?
  # USER AUTH
  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def ensure_logged_in
    unless current_user
      render json: { base: ['invalid input'] }, status: 401
    end
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  # AUDIO
  def load_track(track)
    session[:current_track_id] = track.id
    @current_track = track
  end

  def unload_track
    session[:current_track_id] = nil
    @current_track = nil
  end

  def track_loaded?
    !!current_track
  end

  def current_track
    return nil unless session[:current_track_id]
    @current_track ||= Track.find(session[:current_track_id])
  end

end
