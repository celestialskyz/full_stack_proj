class Api::SessionsController < ApplicationController
  before_action :ensure_logged_in, only:[:destroy]

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
      login!(@user)
        render :template => "api/users/show"
      rescue User::LoginError => e
        render :json => { :errors => e.message }, :status => 422
  end

  def destroy
    if current_user
        logout
        render json: {}
    else
         render :json => { :errors => "no one to log out" }, :status => 404
    end
   
  end

end