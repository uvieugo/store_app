class CreateMenuOptions < ActiveRecord::Migration[6.0]
  def change
    create_table :menu_options do |t|
      t.belongs_to :menu_item, null: false, foreign_key: true
      t.belongs_to :condiment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
