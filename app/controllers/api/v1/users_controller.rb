module Api
  module V1
    class UsersController < ApplicationController
      def show
        puts User.find_by_email(params[:email])
        render json: { user: User.find_by_email(params[:email]) }
      end
    end
  end
end
