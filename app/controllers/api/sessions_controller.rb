class SessionsController < ApplicationController
  def show
  end 

  def new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render '/'
    # else
    #   render json: ["Invalid input"] status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render '/'
    # else
    #   render json: ["Not logged in"] status: 401
    end
  end
end