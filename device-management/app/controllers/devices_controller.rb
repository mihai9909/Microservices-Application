class DevicesController < ApplicationController
  before_action :authorize_admin!, only: [:index, :create, :update, :destroy]
  before_action :authorize_user!, only: [:user_devices]

	def user_devices
		@devices = Device.where(user_id: params[:user_id])
		render json: @devices
	end

  def index
    @devices = Device.all

    render json: @devices
  end

  def show
    @device = Device.find(params[:id])
    render json: @device
  end

  def create
    @device = Device.new(device_params)
    if @device.save
      render json: @device
    else
      render json: @device.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @device = Device.find(params[:id])
    if @device.update(device_params)
      render json: @device
    else
      render json: @device.errors.full_messages, status: :unprocessable_entity
    end
  end

  def delete_user_devices
    @devices = Device.where(user_id: params[:user_id]).destroy_all

    render json: @devices
  end

	def destroy
		@device = Device.find(params[:id])
		@device.destroy
		render json: @device
	end

	private
	def device_params
		params.require(:device).permit(:name, :user_id)
	end

  # Extremely stupid authorization mechanism don't do this in real life
  def authorize_admin!
    unless params[:role]=="admin"
      render json: { error: "You must be an admin to do that." }, status: :forbidden
    end
  end
  
  def authorize_user!
    unless params[:role]=="user"
      render json: { error: "You must be a user to do that." }, status: :forbidden
    end
  end
end
