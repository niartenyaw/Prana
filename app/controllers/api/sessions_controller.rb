class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:email], user_params[:password])
    if @user
      log_in!(@user)
      render 'api/users/show'
    else
      render json: ["Invalid login credentials"], status: 401
    end
  end

  def destroy
    @user = current_user
    log_out!
    render 'api/users/show'
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :name)
  end
end
