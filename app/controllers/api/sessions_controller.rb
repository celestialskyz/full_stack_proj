class Api::SessionsController < ApplicationController
  before_action :ensure_logged_in, only:[:destroy]

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user 
        login!(@user)
        render :template => "api/users/show"
    else
        render :json => { :errors => "invalid credentials" }, :status => 422
    end
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