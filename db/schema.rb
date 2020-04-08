# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_08_194741) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "musicals", force: :cascade do |t|
    t.string "name", null: false
    t.string "description"
    t.float "cost"
    t.string "website", null: false
    t.string "lottery"
    t.string "address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.string "zip", null: false
    t.string "country", null: false
    t.integer "phone_n", null: false
    t.integer "max_cap", null: false
    t.string "category"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "lat"
    t.float "lng"
    t.index ["address"], name: "index_musicals_on_address"
    t.index ["category"], name: "index_musicals_on_category"
    t.index ["cost"], name: "index_musicals_on_cost"
    t.index ["country"], name: "index_musicals_on_country"
    t.index ["name"], name: "index_musicals_on_name"
    t.index ["state", "city"], name: "index_musicals_on_state_and_city"
    t.index ["zip"], name: "index_musicals_on_zip"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "country", null: false
    t.string "session_token"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
