class Api::MusicalsController < ApplicationController

  def index
    @musicals = Musical.all
  end

  def show
    @musical = Musical.find_by(id: params[:id])
  end

  
end