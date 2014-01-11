class AddTableCriterias < ActiveRecord::Migration
  create_table :criterias do |t|
    t.string "name", :null => false
    t.integer "goal_id", :null => false
  end
end
