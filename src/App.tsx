import TextField from './components/TextField';
import useFetchRestaurants from './hooks/useFetchRestaurants';
import extractCategories from './utils/extractCategories';

export default function App() {
  const restaurants = useFetchRestaurants();
  const categories = extractCategories(restaurants);

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      {/* searchBar */}
      <TextField
        placeholder="식당 이름"
      />
      {['전체', ...categories]}
    </div>
  );
}
