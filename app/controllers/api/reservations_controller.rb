class Api::ReservationsController < ApplicationController
  before_action :ensure_logged_in, except:[:new]

  def index 
      @reservations = Reservation.all.includes(current_user) 
    # @reservations = Reservation.all
      render :index
  end

  # def show
  #   @reservation = Event.find(params[:id])
  # end

  # def new
  #     @reservation = Reservation.new
  #     render :new
  # end

  # def create
  #     @reservation = Reservation.new(res_params) 
  #     @reservation.reserver_id = current_user 
  #     if reservation.save 
  #         render :show
  #     else
         
  #         flash.now[:errors] = quack.errors.full_messages
  #         render :new, status: 422
  #     end

  #     # render :show # double render error
  # end

  # def destroy 
  #   reservation = Reservation.find( params[:id] )
  #   reservation.destroy 
  #   render :index

  # end

  # def edit
  #     @reservation = Reservation.find( params[:id] )
  #     render :edit
  # end

  # def update
  #   reservation = Reservation.find( params[:id] )
  #     if reservation.update( res_params ) 
  #         render :show
  #     else
  #         render json: reservation.errors.full_messages, status: 422
        
  #     end
  # end

  private
 
  def res_params 
      params.require(:reservation).permit( :show_id, :reserver_id, :party_size, :date, :time )
  end

end