class AddFriendsToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :friends, :string, array: true, default: []
  end
end
