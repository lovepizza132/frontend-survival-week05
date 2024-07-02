import { useEffect, useState } from 'react';
import Restaurant from '../types/Restaurant';

const url = 'http://localhost:3000/restaurants';

export default function useFetchRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setRestaurants(data.restaurants);
    };
    fetchRestaurants();
  }, []);

  return restaurants;
}
