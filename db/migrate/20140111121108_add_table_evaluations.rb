class AddTableEvaluations < ActiveRecord::Migration
  create_table :evaluations do |t|
    t.string "name", :null => false
    t.integer "criteria_id", :null => false
    t.integer "weight_id", :default => 0
  end
end
