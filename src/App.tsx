import { useState } from 'react';
import useFetchRestaurants from './hooks/useFetchRestaurants';
import extractCategories from './utils/extractCategories';
import TextField from './components/TextField';
import Categories from './components/Categories';

export default function App() {
  const restaurants = useFetchRestaurants();
  const categories = extractCategories(restaurants);
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  console.log('setFilterCategory', setFilterCategory);

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      {/* searchBar */}
      <TextField
        placeholder="식당 이름"
      />
      <Categories
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
    </div>
  );
}
