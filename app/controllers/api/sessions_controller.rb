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
      render '/api/users/show', status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render '/api/users/show'
    else
      render '/api/users/show', status: 401
    end
  end
end