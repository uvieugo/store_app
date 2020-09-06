class Api::V1::MenuItemsController < ApplicationController
  before_action :set_menu_item, only: [:show, :update, :destroy]
  skip_before_action :authenticate_request!, only: [:index, :show]

  # GET /menu_items
  def index
    @menu_items = MenuItem.all.includes([:menu_class, menu_options: [:condiment] ]).order(id: :asc)
    new_menu_items = @menu_items.map do |m|
      {id: m.id, name: m.name, menu_class: m.menu_class.name, object_num: m.object_num, price: m.price,
        options: m.menu_options.map {|o| {id: o.condiment_id, name: o.condiment.name, price: o.condiment.price, object_num: o.condiment.object_num, option_id: o.id} } } 
        # options: m.menu_options.map {|o| Condiment.select(:id,:name,:price,:object_num).find(o.condiment_id) } }
    end
    render json: new_menu_items
  end

  # GET /menu_items/1
  def show
    render json: @menu_item
  end

  # POST /menu_items
  def create
    # puts "Authorization: #{request.headers['Authorization']}"
    new_params = menu_item_params
    if MenuClass.where(name: menu_item_params["menu_class"]).empty?
      render json: [error: "invalid category"]
      return
    end
    new_params[:menu_class_id] = MenuClass.where(name: menu_item_params["menu_class"]).first.id
    new_params.delete(:menu_class)
    # puts new_params
    @menu_item = MenuItem.new(new_params)
    if @menu_item.save
      render json: @menu_item, status: :created#, location: @menu_item
    else
      render json: @menu_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /menu_items/1
  def update
    new_params = menu_item_params
    if MenuClass.where(name: menu_item_params["menu_class"]).empty?
      render json: [error: "invalid category"]
      return
    end
    new_params[:menu_class_id] = MenuClass.where(name: menu_item_params["menu_class"]).first.id
    new_params.delete(:menu_class)
    if @menu_item.update(new_params)
      render json: @menu_item
    else
      render json: @menu_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /menu_items/1
  def destroy
    @menu_item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_menu_item
      @menu_item = MenuItem.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def menu_item_params
      params.require(:menu_item).permit(:menu_class_id, :menu_type_id, :name, :price, :object_num, :menu_class, :menu_type)
    end
end
