class CreateShoes < ActiveRecord::Migration[7.0]
  def change
    create_table :shoes do |t|
      t.string :name
      t.string :brand
      t.string :primarycolor
      t.string :picture

      t.timestamps
    end
  end
end
