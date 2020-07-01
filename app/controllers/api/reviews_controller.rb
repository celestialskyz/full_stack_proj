class Api::ReviewsController < ApplicationController
  # before_action :ensure_logged_in

  def index 
    # byebug
    @reviews=Review.where(musical_id: params[:musical_id])
    
    render :index
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render json: @review, status: :unprocessable_entity
    end
  end


  private

  def review_params
    params.require(:review).permit(:rating, :body, :musical_id, :user_id)
  end
end
