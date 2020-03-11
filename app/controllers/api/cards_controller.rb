class Api::CardsController < ApplicationController
    def index
        @cards = Card.all.where(deck_id: params[:deck_id])
        render :index
    end

    def show
        @card = Card.find(params[:id])
    end

    def create
        @card = Card.new(card_params)
        if @card.save!
            render :show
        else
            render json: @deck.errors.full_messages, status: 422
        end
    end

    def update
        @card = Card.find_by(id: params[:id])
        if @card.update(card_params)
            render :show
        else
            render json: @card.errors.full_messages, status: 422
        end
    end

    def destroy
        @card = Card.find(params[:id])
        @card.destroy

        render :show
    end

    def card_params
        params.require(:card).permit(:question, :answer, :author_id, :deck_id)
    end
end
