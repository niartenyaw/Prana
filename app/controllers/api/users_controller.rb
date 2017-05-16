class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = current_user
    current_user.destroy
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :name)
  end
end
