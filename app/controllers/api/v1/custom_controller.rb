class Api::V1::CustomController < ApplicationController
  skip_before_action :authenticate_request!
  include Payment

  def verify_transaction
    # puts params[:trxref]WEB-51076260
    reference = params[:trxref]
    puts reference
    response = JSON.parse(verify(reference))
    puts response
    if response['status'] == true
      if response["data"]["status"] == 'success'
        render json: {status: :ok, message: response["data"]["status"] }
      else
        render json: {status: :ok, message: response['data']['gateway_response']}
      end
    else
      render json: response
    end
  end

end
