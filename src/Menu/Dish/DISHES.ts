export enum DishType {
  DESERT,
  DRINK,
  SALAD,
  SOUP,
  FIRST_COURSE
};

export interface IDish {
  id: number;
  path: string;
  name: string;
  description: string;
  price: string;
  type: DishType;
}

export const DESERTS: IDish[] = [{
    id: 1,
    path: 'desert1.webp',
    name: 'BELGIAN WAFFLES WITH ICE CREAM AND BERRIES',
    description:
      'Traditional Belgian waffles with raspberries and blueberries; ' +
      'Served with a scoop of ice cream to choose from (strawberry, vanilla, chocolate).',
    price: '6$/350g',
    type: DishType.DESERT
  }, {
    id: 2,
    path: 'desert2.webp',
    name: 'CHOCOLATE PUDDING',
    description:
      'Airy chocolate pudding with shabby walnuts, served with chocolate syrup',
    price: '7$/420g',
    type: DishType.DESERT
  }, {
    id: 3,
    path: 'desert3.webp',
    name: 'CUPCAKE',
    description:
      'Semi-chocolate cake in 2 layers, stuffed with a banana and sprinkled with pieces of milk chocolate.',
    price: '3$/150g',
    type: DishType.DESERT
  }, {
    id: 4,
    path: 'desert4.webp',
    name: 'PANCAKES WITH HONEY AND BERRIES',
    description:
      'Homemade pancakes decorated with blueberries, served with honey.',
    price: '8.5$/500g',
    type: DishType.DESERT
  }
];

export const SOUPS: IDish[] = [{
    id: 1,
    path: 'soup1.webp',
    name: 'KALY SOUP WITH POTATOES AND SAUSAGES',
    description:
      'Very tart soup with smoked paptika, beef sausages and floury potatoes.',
    price: '4.5$/400g',
    type: DishType.SOUP
  }, {
    id: 2,
    path: 'soup2.webp',
    name: 'CREAMY CHICKEN AND RICE SOUP',
    description:
      'Creamy soup with the softest chicken and boiled rice.',
    price: '5$/400g',
    type: DishType.SOUP
  }, {
    id: 3,
    path: 'soup3.webp',
    name: 'FRENCH ONION SOUP',
    description:
      'Sweet caramelized onions swimming in a rich beef broth topped with toasted bread and melty cheese.',
    price: '4$/400g',
    type: DishType.SOUP
  }, {
    id: 4,
    path: 'soup4.webp',
    name: 'THAI COCONUT SOUP',
    description:
      'Rich and creamy yet tangy and salty soup with coconut cream and tart chicken.',
    price: '4$/350g',
    type: DishType.SOUP
  }
];

export const DRINKS: IDish[] = [{
    id: 1,
    path: 'drink1.webp',
    name: 'BANANA CABANA',
    description: 'Brain-freeze inducing blender drink. sweet, creamy and tropical this caribbean drink is a vacation in a glass.',
    price: '4$/200ml',
    type: DishType.DRINK
  }, {
    id: 2,
    path: 'drink2.webp',
    name: 'PINEAPPLE MANGO RUM PUNCH',
    description: 'Coconut rum with pineapple coconut juice, orange juice, mango juice and splash of grenadine.',
    price: '4.5$/200ml',
    type: DishType.DRINK
  }, {
    id: 3,
    path: 'drink3.webp',
    name: 'ICED LONDON FOG',
    description: 'Iced earl grey tea with vanilla extract and maple syrup.',
    price: '5$/200ml',
    type: DishType.DRINK
  }, {
    id: 4,
    path: 'drink4.webp',
    name: 'BLUE LAGOON MOCKTAIL',
    description: 'Fresh and cold drink made by blue Curaçao syrup, taste lemon juice, and a bit of lemon-lime soda.',
    price: '3.5$/200ml',
    type: DishType.DRINK
  }
];

export const FIRST_COURSES: IDish[] = [{
    id: 1,
    path: 'firstDish1.webp',
    name: 'SEARED SCALLOPS ON PEA AND MINT RISOTTO',
    description: 'Lightly seared scallops sit on a summery risotto flavoured with peas and fresh mint.',
    price: '6.5$/300g',
    type: DishType.FIRST_COURSE
  }, {
    id: 2,
    path: 'firstDish2.webp',
    name: 'CANADIAN MEAT PIE',
    description: 'Spicy meat pie with flaky crust and hearty filling.',
    price: '6$/400g',
    type: DishType.FIRST_COURSE
  }, {
    id: 3,
    path: 'firstDish3.webp',
    name: 'TOULOUSE SAUSAGESES WITH LENTILS',
    description: 'Pork sausages with lentils and red chilly pepper.',
    price: '5.5$/400g',
    type: DishType.FIRST_COURSE
  }, {
    id: 4,
    path: 'firstDish4.webp',
    name: 'CROCK POT FRENCH DIP SANDWICH',
    description: 'Tender and juicy sandwiches with melted provolone, toasted hoagie and slow cooked meat.',
    price: '6$/400g',
    type: DishType.FIRST_COURSE
  }
];

export const SALADS: IDish[] = [{
    id: 1,
    path: 'salad1.webp',
    name: 'TORTELLINI CAPRESE SALAD',
    description: 'Tomato, basil and mozzarella in fresh combination.',
    price: '4.5$/300g',
    type: DishType.SALAD
  }, {
    id: 2,
    path: 'salad2.webp',
    name: 'GREEK SALAD',
    description: 'A healthy salad that is chock full of fresh chopped veggies, olives and cheese.',
    price: '4$/300g',
    type: DishType.SALAD
  }, {
    id: 3,
    path: 'salad3.webp',
    name: 'APPLE WALNUT SPINACH SALAD',
    description: 'Packed with healthy greens, fruit, nuts, sweet onions, sharp blue cheese and buttery goat cheese.',
    price: '4.5$/300g',
    type: DishType.SALAD
  }, {
    id: 4,
    path: 'salad4.webp',
    name: 'CAULIFLOWER TABBOULEH SALAD',
    description: 'Based on the traditional Mediterranean salad recipe with added spicy cauliflower rice.',
    price: '4$/300g',
    type: DishType.SALAD
  }
];

export const DISHES: IDish[] = [...DESERTS, ...SOUPS, ...DRINKS, ...FIRST_COURSES, ...SALADS];
