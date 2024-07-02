import TextField from './components/TextField';
import useFetchRestaurants from './hooks/useFetchRestaurants';
import Restaurant from './types/Restaurant';

export default function App() {
  const restaurants = useFetchRestaurants();
  console.log(restaurants);
  // const restaurantsCategory = restaurants.reduce((acc: string[], restaurant: Restaurant) => {
  //   const { category } = restaurant;
  //   return acc.includes(category) ? acc : [...acc, category];
  // }, []);

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
