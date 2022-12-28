require 'rails_helper'

RSpec.describe 'Api::V1::Users', type: :request do
  describe "GET /show" do
    context "User exists" do
      it 'is successful' do
        user = create(:user)
        get api_v1_user_path(user)
        expect(response).to be_successful
      end
    end

    context "User does not exists" do
      it "is not found" do
      end
    end
  end
end
