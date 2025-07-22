
export interface Dish {
  id: number;
  name: string;
  price: string;
  description: string;
  ingredients: string;
  image: string;
  category: string;
}

export interface Beverage {
  name: string;
  price: string;
}

export const menuItems: Dish[] = [
  {
    id: 1,
    name: "Maple-Glazed Salmon",
    price: "$26 CAD",
    description: "Wild Pacific salmon fillet with maple glaze and roasted vegetables.",
    ingredients: "Wild BC salmon, pure maple syrup, Dijon mustard, garlic, seasonal root vegetables, fresh dill.",
    image: "https://images.pexels.com/photos/1268549/pexels-photo-1268549.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "main"
  },
  {
    id: 2,
    name: "Poutine",
    price: "$14 CAD",
    description: "Classic Quebec-style poutine with crispy fries, cheese curds, and rich gravy.",
    ingredients: "Hand-cut fries, Quebec cheese curds, homemade beef gravy, chives.",
    image: "https://images.pexels.com/photos/11442068/pexels-photo-11442068.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "appetizer"
  },
  {
    id: 3,
    name: "Alberta Bison Burger",
    price: "$20 CAD",
    description: "Grilled bison patty topped with smoked cheddar and maple bacon.",
    ingredients: "Ground Alberta bison, smoked cheddar, maple-candied bacon, lettuce, tomato, brioche bun, house sauce.",
    image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "main"
  },
  {
    id: 4,
    name: "Atlantic Lobster Roll",
    price: "$24 CAD",
    description: "Fresh lobster salad in a buttered roll with lemon aioli.",
    ingredients: "Atlantic lobster meat, celery, chives, mayonnaise, lemon zest, butter-toasted brioche roll.",
    image: "https://images.pexels.com/photos/5175448/pexels-photo-5175448.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "main"
  },
  {
    id: 5,
    name: "BC Spot Prawn Chowder",
    price: "$18 CAD",
    description: "Creamy chowder with local spot prawns and garden vegetables.",
    ingredients: "BC spot prawns, Yukon Gold potatoes, corn, celery, onion, cream, fresh dill, crusty bread.",
    image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "appetizer"
  },
  {
    id: 6,
    name: "Wild Mushroom Risotto",
    price: "$19 CAD",
    description: "Creamy risotto with foraged BC mushrooms and parmesan.",
    ingredients: "Arborio rice, mixed wild mushrooms (chanterelle, morel), parmesan, shallots, garlic, white wine, herbs.",
    image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "main"
  },
  {
    id: 7,
    name: "Grilled Elk Striploin",
    price: "$32 CAD",
    description: "Juicy elk steak with red wine sauce and mashed Yukon Gold potatoes.",
    ingredients: "Alberta elk striploin, red wine demi-glace, garlic mashed potatoes, seasonal vegetables.",
    image: "https://images.pexels.com/photos/3992206/pexels-photo-3992206.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "main"
  },
  {
    id: 8,
    name: "Butter Tart Cheesecake",
    price: "$9 CAD",
    description: "A rich cheesecake inspired by the classic Canadian butter tart.",
    ingredients: "Cream cheese, graham cracker crust, brown sugar butter tart filling, pecans, caramel drizzle.",
    image: "https://images.pexels.com/photos/6407020/pexels-photo-6407020.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "dessert"
  }
];

export const beverages = [
  { name: "Ontario Ice Wine (Glass)", price: "$12 CAD" },
  { name: "Local Craft IPA", price: "$7 CAD" },
  { name: "Maple Old Fashioned", price: "$11 CAD" },
  { name: "Fresh Pressed Apple Cider", price: "$5 CAD" }
];