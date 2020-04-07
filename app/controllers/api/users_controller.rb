class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save!
      render :show
    else
        flash.now[:errors] = @user.errors.full_messages
        #put error message on state
        # render json: create
    end
  end

  def user_params
    params.require(:user).permit(:email,:first_name, :last_name, :country, :password)
  end
    
end