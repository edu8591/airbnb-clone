FactoryBot.define do
  factory :user do
    sequence(:email) { |i| "email_#{i}@example.com" }
    password { 'password' }
  end
end
