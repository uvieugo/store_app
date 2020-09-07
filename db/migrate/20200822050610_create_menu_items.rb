class CreateMenuItems < ActiveRecord::Migration[6.0]
  def change
    create_table :menu_items do |t|
      t.references :menu_class, null: false, foreign_key: true
      t.string :name
      t.float :price, defaults: 0.0
      t.string :object_num

      t.timestamps
    end
  end
end
