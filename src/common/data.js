export const listPizza = [
    { id: 1, name: 'Pizza Name 1', price: 8, image: require('../assets/img/pizza_1.jpg') },
    { id: 2, name: 'Pizza Name 2', price: 10, image: require('../assets/img/pizza_2.jpg') },
    { id: 3, name: 'Pizza Name 3', price: 12, image: require('../assets/img/pizza_3.jpg') },
];

export const sizes = [
    { id: 1, name: 'Small', price: -1 },
    { id: 2, name: 'Medium', price: 0 },
    { id: 3, name: 'Large', price: 2 },
];

export const toppings = [
    { id: 1, name: 'Avocado' },
    { id: 2, name: 'Lobster' },
    { id: 3, name: 'Bacon' },
    { id: 4, name: 'Broccoli' },
    { id: 5, name: 'Oyster' },
    { id: 6, name: 'Duck' },
    { id: 7, name: 'Onions' },
    { id: 8, name: 'Salmon' },
    { id: 9, name: 'Ham' },
    { id: 10, name: 'Zucchini' },
    { id: 11, name: 'Tuna' },
    { id: 12, name: 'Sausage' },
];

export const toppingRules = [
    { toppingId: 1, pizzaId: 1, price: 1 },
    { toppingId: 4, pizzaId: 1, price: 1 },
    { toppingId: 4, pizzaId: 2, price: 1 },
    { toppingId: 4, pizzaId: 3, price: 1 },
    { toppingId: 7, pizzaId: 1, price: 1 },
    { toppingId: 7, pizzaId: 2, price: 1 },
    { toppingId: 7, pizzaId: 3, price: 1 },
    { toppingId: 10, pizzaId: 1, price: 1 },
    { toppingId: 10, pizzaId: 2, price: 1 },
    { toppingId: 10, pizzaId: 3, price: 1 },
    { toppingId: 2, pizzaId: 2, price: 2 },
    { toppingId: 5, pizzaId: 2, price: 2 },
    { toppingId: 8, pizzaId: 2, price: 2 },
    { toppingId: 11, pizzaId: 1, price: 2 },
    { toppingId: 11, pizzaId: 3, price: 2 },
    { toppingId: 3, pizzaId: 2, price: 3 },
    { toppingId: 3, pizzaId: 3, price: 3 },
    { toppingId: 6, pizzaId: 3, price: 3 },
    { toppingId: 9, pizzaId: 1, price: 3 },
    { toppingId: 9, pizzaId: 2, price: 3 },
    { toppingId: 9, pizzaId: 3, price: 3 },
    { toppingId: 12, pizzaId: 3, price: 3 },
];