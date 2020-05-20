class Api::ReservationsController < ApplicationController
    before_action :ensure_logged_in

  def index 
    @reservations = Reservation.find_by(params[:reserver_id])
    render :index
  end

  def show
    @reservation = Reservation.find(params[:id])
  end

  def create
    @reservations = Reservation.find_by(params[:reservation][:date], params[:reservation][:time])
    
    @reservations.each do |res| 
      sum+=res.party_size.to_i;
    end

      if (sum > 400) || (sum +params[:reservation][:party_size]) > 400 {
          raise DateError.new
      }
      else{
       @reservation = Reservation.new(res_params)
       @reservation.reserver_id = params[:reserver_id]
       if @reservation.save 
           render :show
       else
        #byebug
        render :json => { errors: @user.errors.full_messages}, :status => 422
        redirect_to api_musical_url(params[:show_id])
       end
       # byebug
      }
  end

  def update
    
     reservation = Reservation.find(params[:id])
     
       if reservation.update(res_params) 
           render :show
       else
           render :json => { errors: reservation.errors.full_messages}, status: 422
       end
       
  end

  def destroy 
     reservation = Reservation.find(params[:id] )
     reservation.destroy 
 
  end

  private
 
  def res_params 
      params.require(:reservation).permit(:show_id, :reserver_id, :party_size, :date, :time, :reserverPhoneN, :specialReq )
  end

end