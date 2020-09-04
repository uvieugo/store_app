class ApplicationController < ActionController::API
  before_action :authenticate_request!
  attr_reader :current_user
  around_action :global_request_logging

  def global_request_logging 
    logger.info "USERAGENT: #{request.headers['HTTP_USER_AGENT']}"
    logger.info "Authorization: #{request.headers['Authorization']}"
    # logger.info "Headers: #{request.headers['Content-Type']}"
    begin 
      yield 
    ensure 
      logger.info "response_status: #{response.status}"
    end 
  end 
  private
    def http_token
        @http_token ||= if request.headers['Authorization'].present?
          request.headers['Authorization'].split(' ').last
        end
    end
  
    def auth_token
      @auth_token ||= JsonWebToken.decode(http_token)
    end
  
    def user_id_in_token?
      http_token && auth_token && auth_token[:user_id].to_i
    end

    protected
    def authenticate_request!
      unless user_id_in_token?
        render json: { errors: ['Not Authenticated'] }, status: :unauthorized
        return
      end
      @current_user = User.find(auth_token[:user_id])
    rescue JWT::VerificationError, JWT::DecodeError
      render json: { errors: ['Not Authenticated'] }, status: :unauthorized
    end
end
