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

ActiveRecord::Schema.define(version: 20170206204532) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.integer  "laboratory_id",             null: false
    t.string   "name",          limit: 100, null: false
    t.string   "description",   limit: 500
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  create_table "context_users", force: :cascade do |t|
    t.integer  "user_id",                      null: false
    t.integer  "user_activity_id",             null: false
    t.string   "local",            limit: 100
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
  end

  create_table "context_widgets", force: :cascade do |t|
    t.integer  "lab_widget_id",                null: false
    t.integer  "user_activity_id",             null: false
    t.string   "value",            limit: 100
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
  end

  create_table "lab_widgets", force: :cascade do |t|
    t.integer  "widget_id",                 null: false
    t.integer  "laboratory_id",             null: false
    t.string   "name",          limit: 100, null: false
    t.string   "rule",          limit: 300
    t.boolean  "status"
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  create_table "laboratories", force: :cascade do |t|
    t.integer  "subject_id",               null: false
    t.string   "name",         limit: 200, null: false
    t.string   "local",        limit: 200
    t.string   "local_server", limit: 300
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  create_table "profiles", force: :cascade do |t|
    t.string   "name",       limit: 100, null: false
    t.string   "action",     limit: 100
    t.integer  "permission"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "subjects", force: :cascade do |t|
    t.string   "name",       limit: 100, null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "user_activities", force: :cascade do |t|
    t.integer  "activity_id",             null: false
    t.integer  "user_id",                 null: false
    t.datetime "date",                    null: false
    t.string   "local",       limit: 100
    t.integer  "status"
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  create_table "user_profiles", force: :cascade do |t|
    t.integer  "profile_id",    null: false
    t.integer  "user_id",       null: false
    t.integer  "laboratory_id", null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "name",       limit: 100, null: false
    t.string   "login",      limit: 50
    t.string   "password",   limit: 60
    t.string   "tag",        limit: 50
    t.string   "email",      limit: 100
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "widgets", force: :cascade do |t|
    t.string   "type",       limit: 100, null: false
    t.string   "rule",       limit: 300
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_foreign_key "activities", "laboratories"
  add_foreign_key "context_users", "user_activities"
  add_foreign_key "context_users", "users"
  add_foreign_key "context_widgets", "lab_widgets"
  add_foreign_key "context_widgets", "user_activities"
  add_foreign_key "lab_widgets", "laboratories"
  add_foreign_key "lab_widgets", "widgets"
  add_foreign_key "laboratories", "subjects"
  add_foreign_key "user_activities", "activities"
  add_foreign_key "user_profiles", "laboratories"
  add_foreign_key "user_profiles", "profiles"
  add_foreign_key "user_profiles", "users"
end
