import TextField from './components/TextField';
import useFetchRestaurants from './hooks/useFetchRestaurants';

export default function App() {
  const restaurants = useFetchRestaurants();

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      {/* searchBar */}
      <TextField
        placeholder="식당 이름"
      />
    </div>
  );
}
