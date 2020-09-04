const categories = ["Toasted Treat", "Dessert",
  "Nigerian Cuisine",
  "From The Grill",
  "Salads",
  "Alcholic Drinks",
  "Soft Drinks",
  "Light Meal"]

const FILTER_MAP = {
  All: () => true,
}

categories.forEach(cat => {
  FILTER_MAP[cat] = item => item.menu_class === cat
})

// const FILTER_MAP = {
//   All: () => true,
//   Wine: item => item.category === "Wine",
//   Aperitif: item => item.category === "Aperitif",
//   Beer: item => item.category === "Beer",
//   Cocktail: item => item.category === "Cocktail",
//   "By Bottle" : item => item.category === "By Bottle",
//   Cognac: item => item.category === "Cognac",
//   "Condiment Beverage": item => item.category === "Condiment Beverage",
//   "Condiment Food": item => item.category === "Condiment Food",
//   Dessert: item => item.category === "Dessert",
//   Protien : item => item.category === "Protien",
//   "From The Grill": item => item.category === "From The Grill",
//   Gin: item => item.category === "Gin",
//   "Juices & Blends": item => item.category === "Juices & Blends",
//   "Light Meal": item => item.category === "Light Meal",
//   Liquers: item => item.category === "Liquers",
//   Mocktails: item => item.category === "Mocktails",
//   "N/Alc Beverage" : item => item.category === "N/Alc Beverage",
//   "Nigerian Cuisine" : item => item.category === "Nigerian Cuisine" ,
//   "On The Move" : item => item.category === "On The Move",
//   Rum: item => item.category === "Rum",
//   Salads: item => item.category === "Salads",
//   Taquela: item => item.category === "Taquela",
//   "Tea-Caddy": item => item.category === "Tea-Caddy",
//   "Toasted Treat":  item => item.category === "Toasted Treat",
//   Vodka: item => item.category === "Vodka",
//   Whiskey: item => item.category === "Whiskey",

// };

export default FILTER_MAP