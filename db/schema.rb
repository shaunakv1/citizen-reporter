# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20140310024715) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "postgis"

  create_table "event_types", force: true do |t|
    t.string   "name"
    t.string   "phone"
    t.string   "email"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "events", force: true do |t|
    t.integer  "event_type_id"
    t.float    "latitude"
    t.float    "longitude"
    t.string   "address"
    t.integer  "accuracy"
    t.integer  "vote"
    t.integer  "status_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "events", ["event_type_id"], name: "index_events_on_event_type_id", using: :btree
  add_index "events", ["status_id"], name: "index_events_on_status_id", using: :btree

  create_table "locations", force: true do |t|
    t.string   "address"
    t.float    "latitude"
    t.float    "longitude"
    t.string   "phone"
    t.string   "site_type"
    t.string   "site_name"
    t.string   "city"
    t.integer  "zip_code"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "publicsiteswgs84", primary_key: "gid", force: true do |t|
    t.integer "objectid"
    t.string  "site_type", limit: 50
    t.string  "site_name", limit: 50
    t.string  "address",   limit: 40
    t.string  "city",      limit: 25
    t.integer "zipcode"
    t.string  "phone",     limit: 20
    t.integer "geom",      limit: 0
    t.decimal "latitude",             precision: 15, scale: 10
    t.decimal "longitude",            precision: 15, scale: 10
  end

  add_index "publicsiteswgs84", ["geom"], name: "publicsiteswgs84_geom_gist", using: :gist

  create_table "spatial_ref_sys", id: false, force: true do |t|
    t.integer "srid",                   null: false
    t.string  "auth_name", limit: 256
    t.integer "auth_srid"
    t.string  "srtext",    limit: 2048
    t.string  "proj4text", limit: 2048
  end

  create_table "statuses", force: true do |t|
    t.string   "value"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
