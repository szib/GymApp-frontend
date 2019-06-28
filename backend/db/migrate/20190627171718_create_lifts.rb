class CreateLifts < ActiveRecord::Migration[5.2]
  def change
    create_table :lifts do |t|
      t.integer :reps
      t.integer :weight
      t.references :exercise, foreign_key: true

      t.timestamps
    end
  end
end
