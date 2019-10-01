class API::UsersController < ApplicationController
  def index
    @users = User.all 
    render "api/users/index"
  end

  def new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render json: ["success"]
    else  
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end