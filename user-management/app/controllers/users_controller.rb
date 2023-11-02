class UsersController < ApplicationController
  before_action :authorize_admin!, only: [:index, :create, :update, :destroy]

  def index
    @users = User.all

    render json: @users
  end

  def find_user
    @user = User.find(params[:id])
    render json: @user
  end

  def show
    if params[:id] == "me"
      @user = current_user
    else
      @user = User.find(params[:id])
    end
    render json: @user
  end

  def create
    @user = User.new(user_params)
    @user.role = "user"
    if @user.save
      render json: @user
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    if params[:id] == "me"
      @user = current_user
    else
      @user = User.find(params[:id])
    end
    begin
      ActiveRecord::Base.connection do
        @user.update(user_params)
        @user.update(password: params[:password]) if params[:password] # I'm very lazy
      end
      render json: @user
    rescue ActiveRecord::RecordInvalid => e
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    if params[:id] == "me"
      @user = current_user
    else
      @user = User.find(params[:id])
    end
    delete_user_devices
    @user.destroy
    render json: @user
  end

  private

  def delete_user_devices
    resp = HTTPX.delete("http://#{ENV['DEVICES_SERVICE_HOST']}/users/#{@user.id}/devices")
    Rails.logger.info "Deleted user devices"
    Rails.logger.info resp
  end

  def user_params
    params.require(:user).permit(:email, :password, :role)
  end

  def authorize_admin!
    unless current_user&.role=="admin"
      render json: { error: "You must be an admin to do that." }, status: :forbidden
    end
  end
end
