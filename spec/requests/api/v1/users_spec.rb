require 'rails_helper'

RSpec.describe Api::V1::Users, type: :request do
  describe "GET /show" do
    context "User exists" do
      it 'is successful' do

      end
    end

    context "User does not exists" do
      it "is not found" do
      end
    end
  end
end
