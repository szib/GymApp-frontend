class AddDetailsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :name, :string
    add_column :users, :height, :integer
    add_column :users, :goal, :string
    add_column :users, :bodyType, :string
    add_column :users, :img, :string
  end
end
