class Api::MusicalsController < ApplicationController

  def index
    @musicals = Show.all
    render :index
  end

  def show
    @musical = Show.find(params[:musical][:id])
  end

  
end