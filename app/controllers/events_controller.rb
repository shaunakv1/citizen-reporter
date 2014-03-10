class EventsController < ApplicationController
  before_action :set_event, only: [:show, :edit, :update, :destroy]

  # GET /events
  # GET /events.json
  def index
    @events = Event.all
    respond_to do |format|
        format.html
        format.json { render :json => @events.to_json(:include => [:event_type, :status]), :callback => params['callback'] }
    end
  end

  # GET /events/1
  # GET /events/1.json
  def show
  end

  # GET /events/1  
  # GET /events/1
  def effects
    event = Event.find(params[:id]);
    @locations = event.locations
    respond_to do |format|
        format.html { redirect_to events_url }
        format.json { render :json => @locations.to_json, :callback => params['callback'] }
    end
  end
  
  # GET /events/1  
  # GET /events/1
  def verify
    @event = Event.find(params[:id]);
    @event.status_id = 2
    respond_to do |format|
      if @event.save
        format.html { redirect_to events_url }
        format.json { head :no_content }
         
            # put your own credentials here 
            account_sid = 'ACf9619fe1f1b27b6dbaf51d3c06ab22c9' 
            auth_token = 'c50446674945a4c557d7b9584a5ce177' 
             
            # set up a client to talk to the Twilio REST API 
            @client = Twilio::REST::Client.new account_sid, auth_token 
             
            @client.account.messages.create({
              :from => '+18329243700', 
              :to => @event.event_type.phone, 
              :body => "There was a #{@event.event_type.name} event at #{@event.address} at #{@event.created_at.to_formatted_s(:long)}",  
            })

            # twilio_sid = "PN75d3b9e7bd94111547f611bf14b600b6"
            # twilio_token = "c50446674945a4c557d7b9584a5ce177"
            # twilio_phone_number = "8329243700"
         
            # @twilio_client = Twilio::REST::Client.new twilio_sid, twilio_token
         
            # @twilio_client.account.sms.messages.create(
            #   :from => "+1#{8329243700}",
            #   :to => @event.event_type.phone,
            #   :body => "There was a #{@event.event_type.name} event at #{@event.address} at #{@event.created_at.to_formatted_s(:long)}"
            # )
      end  
    end
  end

  # GET /events/1
  # GET /events/1.json
  def unverify
    @event = Event.find(params[:id]);
    @event.status_id = 1
    respond_to do |format|
      if @event.save
        format.html { redirect_to events_url }
        format.json { head :no_content }
      end  
    end
  end

  # GET /events/1
  # GET /events/1.json
  def delete
    @event = Event.find(params[:id]);
    @event.destroy
    respond_to do |format|
      format.html { redirect_to events_url }
      format.json { head :no_content }
    end
  end

  # GET /events/new
  def new
    @event = Event.new
    @event_types = EventType.all
  end

  # GET /events/1/edit
  def edit
  end

  # POST /events
  # POST /events.json
  def create
    @event = Event.new(event_params)
    
    old_reports = Event.near([@event.latitude,@event.longitude], 1);
    old_reports = old_reports.select {|r| r.event_type_id == @event.event_type_id }

    if old_reports.count > 0 
      @event = old_reports[0]
      @event.vote = @event.vote + 1
    else
      @event.vote = 1
      @event.status_id = 1
      @event.locations << Location.near([@event.latitude,@event.longitude], 1)
    end 
      
    respond_to do |format|
      if @event.save
        format.html { redirect_to @event, notice: 'Event was successfully created.' }
        format.json { render action: 'show', status: :created, location: @event }
      else
        format.html { render action: 'new' }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /events/1
  # PATCH/PUT /events/1.json
  def update
    respond_to do |format|
      if @event.update(event_params)
        format.html { redirect_to @event, notice: 'Event was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /events/1
  # DELETE /events/1.json
  def destroy
    @event.destroy
    respond_to do |format|
      format.html { redirect_to events_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_params
      params.require(:event).permit(:event_type_id, :latitude, :longitude, :address, :accuracy, :vote, :status_id)
    end
end
