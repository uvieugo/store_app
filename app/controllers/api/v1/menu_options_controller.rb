class Api::V1::MenuOptionsController < ApplicationController
  before_action :set_menu_option, only: [:show, :update, :destroy]
  before_action :get_menu_item, only: [:index]
  skip_before_action :authenticate_request!, only: [:index, :show]

  # GET /menu_options
  def index
    @menu_options = @menu_item.menu_options

    # render json: @menu_options
    result = @menu_options.map {|o| {id: o.id, option: Condiment.find(o.condiment_id)}}
    render json: result
    
    # {
    #   id: @menu_options.id,
    #   option: Condiment.find(@menu_option.condiment_id)
    # }
  end

  # GET /menu_options/1
  def show
    render json: @menu_option
  end

  # POST /menu_options
  def create
    @menu_option = MenuOption.new(menu_option_params)
    # @menu_option = @menu_item.menu_options.new(menu_option_params)

    if @menu_option.save
      o = {
        id: @menu_option.condiment_id, 
        name: @menu_option.condiment.name, 
        price: @menu_option.condiment.price, 
        object_num: @menu_option.condiment.object_num, 
        option_id: @menu_option.id
      }
      render json: o, status: :created#, location: @menu_option
    else
      render json: @menu_option.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /menu_options/1
  def update
    if @menu_option.update(menu_option_params)
      render json: @menu_option
    else
      render json: @menu_option.errors, status: :unprocessable_entity
    end
  end

  # DELETE /menu_options/1
  def destroy
    @menu_option.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_menu_option
      @menu_option = MenuOption.find(params[:id])
    end

    def get_menu_item
      @menu_item = MenuItem.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def menu_option_params
      params.require(:menu_option).permit(:menu_item_id, :condiment_id)
    end
end
