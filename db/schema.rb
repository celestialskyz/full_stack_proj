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

ActiveRecord::Schema.define(version: 2020_06_26_212617) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_trgm"
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "musicals", force: :cascade do |t|
    t.string "name", null: false
    t.string "description"
    t.float "cost"
    t.string "website", null: false
    t.boolean "lottery"
    t.string "address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.string "zip", null: false
    t.string "country", null: false
    t.bigint "phone_n", null: false
    t.integer "max_cap", null: false
    t.string "category", null: false
    t.float "lat", null: false
    t.float "lng", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["address"], name: "index_musicals_on_address"
    t.index ["category"], name: "index_musicals_on_category"
    t.index ["city"], name: "index_musicals_on_city"
    t.index ["cost"], name: "index_musicals_on_cost"
    t.index ["country"], name: "index_musicals_on_country"
    t.index ["name"], name: "index_musicals_on_name"
    t.index ["state"], name: "index_musicals_on_state"
    t.index ["zip"], name: "index_musicals_on_zip"
  end

  create_table "reservations", force: :cascade do |t|
    t.integer "show_id", null: false
    t.integer "reserver_id", null: false
    t.integer "party_size", null: false
    t.date "date", null: false
    t.integer "time"
    t.string "reserverPhoneN"
    t.string "specialReq"
    t.index ["reserver_id"], name: "index_reservations_on_reserver_id"
    t.index ["show_id"], name: "index_reservations_on_show_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "body", default: "", null: false
    t.integer "rating", null: false
    t.integer "musical_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["musical_id"], name: "index_reviews_on_musical_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
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

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
