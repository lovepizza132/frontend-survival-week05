import { useLocalStorage } from 'usehooks-ts';
import Food from '../types/Food';
import MenuItem from './MenuItem';

type MenuProps = {
  menu: Food[];
}

export default function Menu({
  menu,
}: MenuProps) {
  const [selectedFood, selectFood] = useLocalStorage<Food[]>('cart', []);

  if (!menu.length) {
    return (
      <p>메뉴가 존재하지 않습니다</p>
    );
  }

  const handleClick = (food: Food) => {
    selectFood([...selectedFood, food]);
  };

  return (
    <ul
      style={{
        listStyleType: 'none',
      }}
    >
      {[...menu].map((food: Food, index: number) => {
        const key = `${food.id}-${index}`;

        return (
          <MenuItem
            key={key}
            food={food}
          >
            <button
              style={{
                marginLeft: '.5rem',
              }}
              type="button"
              name={food.name}
              onClick={() => handleClick(food)}
            >
              선택
            </button>
          </MenuItem>
        );
      })}
    </ul>
  );
}
