require 'faker'

include ActionDispatch::TestProcess

FactoryGirl.define do
  factory :school do
    email    Faker::Internet.email
    password Faker::Internet.password
  end

  factory :student do
    code Faker::Lorem.characters(10)
  end

  factory :book do
    title       Faker::Lorem.sentence
    author      Faker::Name.name
    isbn        Faker::Lorem.characters(10)
    description Faker::Lorem.paragraph
    file        { fixture_file_upload(Rails.root.join('spec', 'fixtures', 'one.txt'), 'text/plain') }
  end
end
