class Api::V1::CondimentsController < ApplicationController
  before_action :set_condiment, only: [:show, :update, :destroy]
  skip_before_action :authenticate_request!, only: [:index, :show]

  # GET /condiments
  def index
    @condiments = Condiment.select(:id, :name, :price, :object_num)

    render json: @condiments
  end

  # GET /condiments/1
  def show
    render json: @condiment
  end

  # POST /condiments
  def create
    @condiment = Condiment.new(condiment_params)

    if @condiment.save
      render json: @condiment, status: :created#, location: @condiment
    else
      render json: @condiment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /condiments/1
  def update
    if @condiment.update(condiment_params)
      render json: @condiment
    else
      render json: @condiment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /condiments/1
  def destroy
    @condiment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_condiment
      @condiment = Condiment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def condiment_params
      params.require(:condiment).permit(:name, :price, :object_num)
    end
end
