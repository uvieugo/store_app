class Api::V1::MenuClassesController < ApplicationController
  before_action :set_menu_class, only: [:show, :update, :destroy]
  skip_before_action :authenticate_request!, only: [:index, :show]

  # GET /menu_classes
  def index
    @menu_classes = MenuClass.all

    render json: @menu_classes
  end

  # GET /menu_classes/1
  def show
    render json: @menu_class
  end

  # POST /menu_classes
  def create
    @menu_class = MenuClass.new(menu_class_params)

    if @menu_class.save
      render json: @menu_class, status: :created
    else
      render json: @menu_class.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /menu_classes/1
  def update
    if @menu_class.update(menu_class_params)
      render json: @menu_class
    else
      render json: @menu_class.errors, status: :unprocessable_entity
    end
  end

  # DELETE /menu_classes/1
  def destroy
    @menu_class.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_menu_class
      @menu_class = MenuClass.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def menu_class_params
      params.require(:menu_class).permit(:name)
    end
end
