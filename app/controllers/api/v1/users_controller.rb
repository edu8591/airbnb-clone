class Api::V1::UsersController < Api::V1::BaseController
  def show
    render json: { user: User.find_by_email(params[:email]) }
  end
end
