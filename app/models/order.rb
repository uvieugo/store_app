class Order < ApplicationRecord
  # serialize :items, JSON
  before_create :generate_order_num
  enum order_type: { novalue: 0, dinein: 1, takeout: 2, delivery:3}

  private
  def generate_order_num
    chars = ("0".."9").to_a
    generate_order_num = "WEB-"
    1.upto(8) { |i| generate_order_num << chars[rand(chars.size-1)] }
    self.order_num = generate_order_num
  end
end
