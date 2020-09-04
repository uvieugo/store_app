class Api::V1::SessionsController < ApplicationController
  skip_before_action :authenticate_request!
  def create
    user = User.find_for_database_authentication(email: params[:email])
      if user.nil?
        render json: {success: false, error: 'Invalid Username/Password'}, status: :unauthorized
        elsif user.valid_password?(params[:password])
        render json: payload(user)
      else
        render json: {success: false, error: 'Invalid Username/Password'}, status: :unauthorized
      end
  end

  def destroy
  end

  private
  def payload(user)
    return nil unless user and user.id
    {
        auth_token: JsonWebToken.encode({user_id: user.id}),
        success: true,
        isLoginValid: true,
    }      
  end
end