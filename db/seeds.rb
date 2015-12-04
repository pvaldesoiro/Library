school1 = School.create(email: 'testschool@example.com', password: 'abcd1234')
school2 = School.create(email: 'testschool2@example.com', password: 'abcd1234')

(0..4).each do |i|
  Student.create(code: i.to_s * 5, school: school1)
  Student.create(code: (i + 4).to_s * 5, school: school2)
end

Book.create(title: 'This is a book', author: 'author1', isbn: 1.to_s * 10,
            description: "The awesome book of I don't know. " * 10,
            cover: File.new("#{Rails.root}/spec/fixtures/one.jpg"),
            file: File.new("#{Rails.root}/spec/fixtures/one.txt"),
            school: school2)

Book.create(title: 'Not the same book', author: 'author1', isbn: 2.to_s * 10,
            description: "The book that I don't really like. " * 10,
            cover: File.new("#{Rails.root}/spec/fixtures/two.jpg"),
            file: File.new("#{Rails.root}/spec/fixtures/two.txt"),
            school: school1)

Book.create(title: 'This is a whale!', author: 'author2', isbn: 1.to_s * 10,
            description: "I'm starting to go out of descriptions. " * 10,
            cover: File.new("#{Rails.root}/spec/fixtures/three.jpg"),
            file: File.new("#{Rails.root}/spec/fixtures/three.txt"),
            school: school1)

(0..10).each do |i|
  Book.create(title: 'Randomly ' + (i.to_s * 2), author: 'author3',
              isbn: 1.to_s * 10,
              description: 'Random Book ' + i.to_s + '. ' * 10,
              cover: File.new("#{Rails.root}/spec/fixtures/three.jpg"),
              file: File.new("#{Rails.root}/spec/fixtures/three.txt"),
              school: school2)
end
