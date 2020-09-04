class CreateCondiments < ActiveRecord::Migration[6.0]
  def change
    create_table :condiments do |t|
      t.string :name
      t.float :price, default: 0.0
      t.string :object_num

      t.timestamps
    end
  end
end
