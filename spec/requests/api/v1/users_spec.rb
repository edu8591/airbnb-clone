require 'rails_helper'

RSpec.describe 'Api::V1::Users', type: :request do
  describe "GET /show" do
    let(:headers) do
      { 'ACCEPT' => 'application/json' }
    end

    context "User exists" do
      it 'is successful' do
        user = create(:user)
        get api_v1_user_path(user), headers: headers
        expect(response).to be_successful
      end
    end

    context "User does not exists" do
      it "is not found" do
        get api_v1_user_path(50), headers: headers
        expect(response.status).to eq 404
      end
    end
  end
end
