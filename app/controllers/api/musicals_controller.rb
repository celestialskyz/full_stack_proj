class Api::MusicalsController < ApplicationController

  def index
    @musicals = Musical.all
  end

  def show
    @musical = Musical.find(params[:musical][:id])
  end

  
end