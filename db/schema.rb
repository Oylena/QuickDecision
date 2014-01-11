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

ActiveRecord::Schema.define(version: 20140111121108) do

  create_table "alternatives", force: true do |t|
    t.string  "name",       null: false
    t.integer "project_id", null: false
  end

  create_table "criterias", force: true do |t|
    t.string  "name",    null: false
    t.integer "goal_id", null: false
  end

  create_table "evaluations", force: true do |t|
    t.string  "name",                    null: false
    t.integer "criteria_id",             null: false
    t.integer "weight_id",   default: 0
  end

  create_table "goals", force: true do |t|
    t.string  "name",       null: false
    t.integer "project_id", null: false
  end

  create_table "projects", force: true do |t|
    t.string "name", null: false
  end

end
