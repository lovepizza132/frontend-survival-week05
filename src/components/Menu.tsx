import Food from '../types/Food';
import MenuItem from './MenuItem';

type MenuProps = {
  menu: Food[];
}

export default function Menu({
  menu,
}: MenuProps) {
  if (!menu.length) {
    return (
      <p>메뉴가 존재하지 않습니다</p>
    );
  }

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
            >
              선택
            </button>
          </MenuItem>
        );
      })}
    </ul>
  );
}
