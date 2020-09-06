# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_02_044531) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "condiments", force: :cascade do |t|
    t.string "name"
    t.float "price"
    t.string "object_num"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "menu_classes", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "menu_items", force: :cascade do |t|
    t.bigint "menu_class_id", null: false
    t.string "name"
    t.float "price"
    t.string "object_num"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["menu_class_id"], name: "index_menu_items_on_menu_class_id"
  end

  create_table "menu_options", force: :cascade do |t|
    t.bigint "menu_item_id", null: false
    t.bigint "condiment_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["condiment_id"], name: "index_menu_options_on_condiment_id"
    t.index ["menu_item_id"], name: "index_menu_options_on_menu_item_id"
  end

  create_table "orders", force: :cascade do |t|
    t.jsonb "details"
    t.boolean "status"
    t.boolean "pos_status"
    t.string "order_num"
    t.integer "order_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "menu_items", "menu_classes"
  add_foreign_key "menu_options", "condiments"
  add_foreign_key "menu_options", "menu_items"
end
