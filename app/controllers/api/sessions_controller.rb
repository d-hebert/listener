class Api::SessionsController < ApplicationController
  def show
  end 

  def new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render '/api/users/show'
    else
      render json: ["The username or password is incorrect"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render '/api/users/show'
    else
      render json: ["Not logged in"], status: 401
    end
  end
end