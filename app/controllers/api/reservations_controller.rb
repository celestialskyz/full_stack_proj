class Api::ReservationsController < ApplicationController
    before_action :ensure_logged_in, except:[:create]

  def index 
    @reservations = Reservation.all
    render :index
  end

  def show
    @reservation = Reservation.find(params[:id])
  end

  def create
    #if !(params[:reservation][:date].kind_of?(Date))
     # day = Date.new(params[:reservation][:date])
      #@reservation = Reservation.new(params[:reservation][:show_id], params[:reservation][:reserver_id], params[:reservation][:party_size], day, params[:reservation][:time])
    #end
       @reservation = Reservation.new(res_params)
      #if (current_user)
      #  @reservation.reserver_id = current_user 
      #end
       #byebug
       if @reservation.save 
           render :show
       else
        #byebug
         redirect_to api_musical_url(params[:show_id])
       end
       # byebug
  end

  def update
    
     reservation = Reservation.find( params[:id] )
     
       if reservation.update( res_params ) 
           render :show
       else
           render json: reservation.errors.full_messages, status: 422
        
       end
       
  end

  def destroy 
     reservation = Reservation.find(params[:id] )
     reservation.destroy 
 
  end

  private
 
  def res_params 
      params.require(:reservation).permit(:show_id, :reserver_id, :party_size, :date, :time )
  end

end