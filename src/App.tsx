import { useState } from 'react';
import useFetchRestaurants from './hooks/useFetchRestaurants';
import extractCategories from './utils/extractCategories';
import SearchBar from './components/SearchBar';
import Restaurant from './types/Restaurant';
import Food from './types/Food';
import filterRestaurants from './utils/filterRestaurants';

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
      <table>
        <thead>
          <tr>
            <th
              style={{
                paddingInline: '2rem',
              }}
            >
              식당 이름
            </th>
            <th>
              종류
            </th>
            <th>
              메뉴
            </th>
          </tr>
        </thead>
        <tbody>
          {[...filteredRestaurants].map((restaurant: Restaurant) => (
            <tr
              key={restaurant.id}
            >
              <td>
                {restaurant.name}
              </td>
              <td>
                {restaurant.category}
              </td>
              <td>
                {[...restaurant.menu].map((food: Food) => (
                  <ul
                    key={food.id}
                    style={{
                      listStyleType: 'none',
                    }}
                  >
                    <li>
                      <span>
                        {food.name}
                        (
                        {food.price.toLocaleString()}
                        원)
                      </span>
                      <button
                        style={{
                          marginLeft: '.5rem',
                        }}
                        type="button"
                        name={food.name}
                      >
                        선택
                      </button>
                    </li>
                  </ul>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
