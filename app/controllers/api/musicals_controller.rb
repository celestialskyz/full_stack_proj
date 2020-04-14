require "byebug"

class Api::MusicalsController < ApplicationController
  
  def index
    # byebug
    if params[:inputQ].present?
    @musicals = Musical.search_it(params[:inputQ])
    # @musicals = Musical.text_search(params[:inputQ])
  
  else
    @musicals = Musical.all
    end
  end

  def show
    # byebug
    @musical = Musical.find_by(id: params[:id])
    
  end
  
  
end