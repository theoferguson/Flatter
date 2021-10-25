class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :content
      t.belongs_to :user_id, null: false, foreign_key: true
      t.belongs_to :wall_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
