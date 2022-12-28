# frozen_string_literal: true

module Api
  module V1
    class UsersController < ApplicationController
      def show
        user = User.find(params[:email])
        respond_to do |format|
          format.json {
            render json: user.to_json, status: :ok
          }
        end
      rescue ActiveRecord::RecordNotFound => e
        respond_to do |format|
          format.json {
            render json: { error: e.message }.to_json, status: 404
          }
        end
      end
    end
  end
end
