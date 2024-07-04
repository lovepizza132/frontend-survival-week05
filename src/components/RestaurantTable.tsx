import Restaurant from '../types/Restaurant';
import Food from '../types/Food';

type RestaurantTableProps = {
  restaurants: Restaurant[]
}

export default function RestaurantTable({
  restaurants,
}: RestaurantTableProps) {
  return (
    <div>
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
          {[...restaurants].map((restaurant: Restaurant) => (
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
