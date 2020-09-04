module Payment
  require 'net/http'
  require 'uri'
  require 'json'
  
  def init(property,transaction,callback)
    uri = URI.parse("https://api.paystack.co/transaction/initialize")
    request = Net::HTTP::Post.new(uri)
    request.content_type = "application/json"
    request["Authorization"] = "Bearer #{property.setting.payprocessor['paystack_sec_key']}"
    request.body = JSON.dump({
      "reference" => "#{transaction.reference}",
      "amount" => "#{transaction.amount}",
      "email" => "#{transaction.email}",
      # "callback_url" => "#{root_url + "bp/" + property.code + "/callback" }"
      "callback_url" => callback
    })

    req_options = {
      use_ssl: uri.scheme == "https",
    }

    response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
      http.request(request)
    end
    # response.code
    response.body
  end

  def verify(transaction)
    uri = URI.parse("https://api.paystack.co/transaction/verify/#{transaction}")
    request = Net::HTTP::Get.new(uri)
    request["Authorization"] = "Bearer #{ENV['paystack_secret']}"

    req_options = {
      use_ssl: uri.scheme == "https",
    }

    response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
      http.request(request)
    end
    # response.code
    response.body
  end
  
end
