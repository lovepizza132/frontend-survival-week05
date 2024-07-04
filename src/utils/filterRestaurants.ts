import Restaurant from '../types/Restaurant';

type filterConditions = {
  filterText: string;
  filterCategory: string;
}

const normalize = (text: string) => text.trim().toLocaleLowerCase();

export default function filterRestaurants(
  restaurants: Restaurant[],
  { filterText, filterCategory }: filterConditions,
): Restaurant[] {
  const match = (restaurant: Restaurant) => (restaurant.category === filterCategory);

  const filteredRestaurants = filterCategory === '전체'
    ? restaurants
    : restaurants.filter((restaurant: Restaurant) => match(restaurant));

  const query = normalize(filterText);

  if (!query) {
    return filteredRestaurants;
  }

  const contain = (restaurant: Restaurant) => normalize(restaurant.name).includes(query);

  return filteredRestaurants.filter((restaurant: Restaurant) => contain(restaurant));
}
