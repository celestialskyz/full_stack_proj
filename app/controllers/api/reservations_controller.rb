class Api::ReservationsController < ApplicationController
  before_action :ensure_logged_in

  def index 
    # byebug
    @reservations=current_user.reservations
    
    # @reservations  = Reservation.find_by(params[:reservation][:reserver_id])
    render :index
  end

  def show
    @reservation = Reservation.find_by(id:params[:id])
  end

  def create
    # byebug
    @reservations = Reservation.where(date: params[:reservation][:date], time: params[:reservation][:time], show_id: params[:reservation][:show_id])
    # byebug
    partysum= 0
    if !@reservations.empty?
        @reservations.each do |res| 
          partysum+=res.party_size.to_i;
        end
        # byebug
        @musical = Musical.find_by(id: params[:reservation][:show_id])
        if (partysum >  @musical.max_cap) || ((partysum +params[:reservation][:party_size].to_i) >  @musical.max_cap)
            raise DateError.new
        end
    end
    # byebug
       @reservation = Reservation.new(res_params)
       @reservation.reserver_id = params[:reservation][:reserver_id]
       if @reservation.save 
           render :show
       else
        #byebug
        render :json => { errors: @user.errors.full_messages}, :status => 422
        redirect_to api_musical_url(params[:reservation][:show_id])
       end
       # byebug
      
  end

  def update
    
     reservation = Reservation.find_by(id:params[:id])
     
       if reservation.update(res_params) 
           render :show
       else
           render :json => { errors: reservation.errors.full_messages}, status: 422
       end
       
  end

  def destroy
    #  reservation = current_user.reservations.find_by(id: params[:id])
    reservation = Reservation.find_by(id:params[:id])
   # byebug
    reservation.destroy 
 
  end

  private
 
  def res_params 
    params.require(:reservation).permit(:show_id, :reserver_id, :party_size, :date, :time, :reserverPhoneN, :specialReq )
end

end