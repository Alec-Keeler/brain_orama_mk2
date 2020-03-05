class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login!(@user)
            render 'api/users/show'
        else
            errors = ["Invalid email or password"]
            render json: errors, status: 422
        end
    end

    def destroy
        if current_user
            logout!
            render json: current_user
        else
            errors = ["Already logged out!"]
            render json: errors, status: 404
        end
    end

end
