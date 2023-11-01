class CreateDevices < ActiveRecord::Migration[7.0]
  def change
    create_table :devices do |t|
      t.integer :user_id
      t.string :name

      t.timestamps
    end

    add_index :devices, :user_id
  end
end
