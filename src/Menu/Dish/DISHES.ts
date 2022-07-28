export interface IDish {
  id: number;
  path: string;
  name: string;
  description: string;
  price: string;
}

export const DISHES: IDish[] = [{
    id: 1,
    path: 'desert1.png',
    name: 'BELGIAN WAFFLES WITH ICE CREAM AND BERRIES',
    description:
      'Traditional Belgian waffles with raspberries and blueberries; ' +
      'Served with a scoop of ice cream to choose from (strawberry, vanilla, chocolate).',
    price: '6$/350g'
  }, {
    id: 2,
    path: 'desert2.png',
    name: 'CHOCOLATE PUDDING',
    description:
      'Airy chocolate pudding with shabby walnuts, served with chocolate syrup',
    price: '7$/420g'
  }, {
    id: 3,
    path: 'desert3.png',
    name: 'CUPCAKE',
    description:
      'Semi-chocolate cake in 2 layers, stuffed with a banana and sprinkled with pieces of milk chocolate.',
    price: '3$/150g'
  }, {
    id: 4,
    path: 'desert4.png',
    name: 'PANCAKES WITH HONEY AND BERRIES',
    description:
      'Homemade pancakes decorated with blueberries, served with honey.',
    price: '8.5$/500g'
  }, {
    id: 5,
    path: 'soup1.jpg',
    name: 'KALY SOUP WITH POTATOES AND SAUSAGES',
    description:
      'Very tart soup with smoked paptika, beef sausages and floury potatoes.',
    price: '4.5$/400g'
  }, {
    id: 6,
    path: 'soup2.jpg',
    name: 'CREAMY CHICKEN AND RICE SOUP',
    description:
      'Creamy soup with the softest chicken and boiled rice.',
    price: '5$/400g'
  }, {
    id: 7,
    path: 'soup3.jpg',
    name: 'FRENCH ONION SOUP',
    description:
      'Sweet caramelized onions swimming in a rich beef broth topped with toasted bread and melty cheese.',
    price: '4$/400g'
  }, {
    id: 8,
    path: 'soup4.jpg',
    name: 'THAI COCONUT SOUP',
    description:
      'Rich and creamy yet tangy and salty soup with coconut cream and tart chicken.',
    price: '4$/350g'
  }, {
    id: 9,
    path: 'drink1.jpg',
    name: 'BANANA CABANA',
    description: 'Brain-freeze inducing blender drink. sweet, creamy and tropical this caribbean drink is a vacation in a glass.',
    price: '4$/200ml'
  }, {
    id: 10,
    path: 'drink2.jpg',
    name: 'PINEAPPLE MANGO RUM PUNCH',
    description: 'Coconut rum with pineapple coconut juice, orange juice, mango juice and splash of grenadine.',
    price: '4.5$/200ml'
  }, {
    id: 11,
    path: 'drink3.jpg',
    name: 'ICED LONDON FOG',
    description: 'Iced earl grey tea with vanilla extract and maple syrup.',
    price: '5$/200ml'
  }, {
    id: 12,
    path: 'drink4.jpg',
    name: 'BLUE LAGOON MOCKTAIL',
    description: 'Fresh and cold drink made by blue Curaçao syrup, taste lemon juice, and a bit of lemon-lime soda.',
    price: '3.5$/200ml'
  }, {
    id: 13,
    path: 'firstDish1.jpg',
    name: 'SEARED SCALLOPS ON PEA AND MINT RISOTTO',
    description: 'Lightly seared scallops sit on a summery risotto flavoured with peas and fresh mint.',
    price: '6.5$/300g'
  }, {
    id: 14,
    path: 'firstDish2.jpg',
    name: 'CANADIAN MEAT PIE',
    description: 'Spicy meat pie with flaky crust and hearty filling.',
    price: '6$/400g'
  }, {
    id: 15,
    path: 'firstDish3.jpg',
    name: 'TOULOUSE SAUSAGESES WITH LENTILS',
    description: 'Pork sausages with lentils and red chilly pepper.',
    price: '5.5$/400g'
  }, {
    id: 16,
    path: 'firstDish4.jpg',
    name: 'CROCK POT FRENCH DIP SANDWICH',
    description: 'Tender and juicy sandwiches with melted provolone, toasted hoagie and slow cooked meat.',
    price: '6$/400g'
  }, {
    id: 17,
    path: 'salad1.jpg',
    name: 'TORTELLINI CAPRESE SALAD',
    description: 'Tomato, basil and mozzarella in fresh combination.',
    price: '4.5$/300g'
  }, {
    id: 18,
    path: 'salad2.jpg',
    name: 'GREEK SALAD',
    description: 'A healthy salad that is chock full of fresh chopped veggies, olives and cheese.',
    price: '4$/300g'
  }, {
    id: 19,
    path: 'salad3.jpg',
    name: 'APPLE WALNUT SPINACH SALAD',
    description: 'Packed with healthy greens, fruit, nuts, sweet onions, sharp blue cheese and buttery goat cheese.',
    price: '4.5$/300g'
  }, {
    id: 20,
    path: 'salad4.jpg',
    name: 'CAULIFLOWER TABBOULEH SALAD',
    description: 'Based on the traditional Mediterranean salad recipe with added spicy cauliflower rice.',
    price: '4$/300g'
  }
];