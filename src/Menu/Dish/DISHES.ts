export interface IDish {
  id: number;
  path: string;
  name: string;
  description: string;
  price: string;
}

export const DISHES: IDish[] = [{
    id: 1,
    path: 'dish1.png',
    name: 'BELGIAN WAFFLES WITH ICE CREAM AND BERRIES',
    description:
      'Traditional Belgian waffles with raspberries and blueberries; ' +
      'Served with a scoop of ice cream to choose from (strawberry, vanilla, chocolate).',
    price: '6$/350g'
  }, {
    id: 2,
    path: 'dish2.png',
    name: 'CHOCOLATE PUDDING',
    description:
      'Airy chocolate pudding with shabby walnuts, served with chocolate syrup',
    price: '7$/420g'
  }, {
    id: 3,
    path: 'dish3.png',
    name: 'CUPCAKE',
    description:
      'Semi-chocolate cake in 2 layers, stuffed with a banana and sprinkled with pieces of milk chocolate.',
    price: '3$/150g'
  }, {
    id: 4,
    path: 'dish4.png',
    name: 'PANCAKES WITH HONEY AND BERRIES',
    description:
      'Homemade pancakes decorated with blueberries, served with honey.',
    price: '8.5$/500g'
  }, {
    id: 1,
    path: 'dish2.png',
    name: 'CHOCOLATE PUDDING',
    description:
      'Airy chocolate pudding with shabby walnuts, served with chocolate syrup',
    price: '7$/420g'
  }, {
    id: 2,
    path: 'dish1.png',
    name: 'BELGIAN WAFFLES WITH ICE CREAM AND BERRIES',
    description:
      'Traditional Belgian waffles with raspberries and blueberries; ' +
      'Served with a scoop of ice cream to choose from (strawberry, vanilla, chocolate).',
    price: '6$/350g'
  }, {
    id: 3,
    path: 'dish4.png',
    name: 'PANCAKES WITH HONEY AND BERRIES',
    description:
      'Homemade pancakes decorated with blueberries, served with honey.',
    price: '8.5$/500g'
  }, {
    id: 4,
    path: 'dish3.png',
    name: 'CUPCAKE',
    description:
      'Semi-chocolate cake in 2 layers, stuffed with a banana and sprinkled with pieces of milk chocolate.',
    price: '3$/150g'
  }
];