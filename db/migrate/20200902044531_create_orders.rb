class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.jsonb :details
      t.boolean :status, defaults: false
      t.boolean :pos_status, defaults: false
      t.string :order_num

      t.timestamps
    end
  end
end
