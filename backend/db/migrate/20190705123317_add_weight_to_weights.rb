class AddWeightToWeights < ActiveRecord::Migration[5.2]
  def change
    add_column :weights, :weight, :integer
  end
end
