class CreateWeights < ActiveRecord::Migration[5.2]
  def change
    create_table :weights do |t|
      t.datetime :date

      t.timestamps
    end
  end
end
