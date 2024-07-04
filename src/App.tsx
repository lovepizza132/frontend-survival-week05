import { useState } from 'react';
import useFetchRestaurants from './hooks/useFetchRestaurants';
import extractCategories from './utils/extractCategories';
import SearchBar from './components/SearchBar';
import filterRestaurants from './utils/filterRestaurants';
import RestaurantTable from './components/RestaurantTable';

export default function App() {
  const restaurants = useFetchRestaurants();

  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');
  const categories = extractCategories(restaurants);

  const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });

  // console.log('filterCategory', filterCategory);
  // console.log('text', text);

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <SearchBar
        filterText={filterText}
        categories={categories}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantTable
        restaurants={filteredRestaurants}
      />
    </div>
  );
}
