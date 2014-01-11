class AddTableAlternatives < ActiveRecord::Migration
  create_table :alternatives do |t|
    t.string "name", :null => false
    t.integer "project_id", :null => false
  end
end
