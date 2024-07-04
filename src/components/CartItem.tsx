import Food from '../types/Food';
import MenuItem from './MenuItem';

type CartItemProps = {
  food: Food;
  index: number;
  onClickCancel: (index: number) => void;
}

export default function CartItem({
  food, index, onClickCancel,
}: CartItemProps) {
  return (
    <MenuItem
      food={food}
    >
      <button
        type="button"
        onClick={() => onClickCancel(index)}
      >
        취소
      </button>
    </MenuItem>
  );
}
