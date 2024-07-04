import Restaurant from '../types/Restaurant';
import Food from '../types/Food';

type RestaurantRowProps = {
  restaurant: Restaurant;
}

export default function RestaurantRow({
  restaurant,
}: RestaurantRowProps) {
  const { name, category, menu } = restaurant;

  return (
    <tr>
      <td>
        {name}
      </td>
      <td>
        {category}
      </td>
      <td>
        {[...menu].map((food: Food) => (
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
  );
}
