import Food from '../types/Food';

export default function calculateTotalPrice(menu: Food[]) {
  return menu.reduce((acc: number, food: Food) => acc + food.price, 0);
}
