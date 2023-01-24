# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
10.times do |i|
  property = Property.create!(
    name: Faker::Lorem.unique.words(number: 2).join(' '),
    headline: Faker::Lorem.sentence,
    description: Faker::Lorem.paragraph,
    street_1: Faker::Address.street_address,
    city: Faker::Address.city,
    state: Faker::Address.state,
    country: 'United States',
    price: (100..250).to_a.sample
  )
  10.times do |b|
    property.images.attach(io: File.open(Rails.root.join('db', 'sample', 'images', "property#{i + 1}", "#{b}.png")),
                           filename: "#{property.name}#{b}")
  end
end
