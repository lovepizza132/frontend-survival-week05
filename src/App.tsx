import useFetchRestaurants from './hooks/useFetchRestaurants';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';

export default function App() {
  const restaurants = useFetchRestaurants();

  // console.log('filterCategory', filterCategory);
  // console.log('text', text);

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <FilterableRestaurantTable
        restaurants={restaurants}
      />
    </div>
  );
}
