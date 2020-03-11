class Api::DecksController < ApplicationController
    def index
        @decks = Deck.all
        render :index
    end

    def show
        @deck = Deck.find(params[:id])
    end

    def create
        @deck = Deck.new(deck_params)
        if @deck.save
            render :show
        else
            render json: @deck.errors.full_messages, status: 422
        end
    end

    def update
        @deck = Deck.find_by(id: params[:id])
        if @deck.update(deck_params)
            render :show
        else
            render json: @deck.errors.full_messages, status: 422
        end
    end

    def destroy
        @deck = Deck.find(params[:id])
        @deck.destroy

        render :show
    end

    def deck_params
        params.require(:deck).permit(:name, :description, :creator_id)
    end
end
