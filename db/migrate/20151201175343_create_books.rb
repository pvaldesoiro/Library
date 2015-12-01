class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :isbn
      t.string :title
      t.string :author
      t.text :description
      t.attachment :cover
      t.attachment :file
      t.references :school, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
