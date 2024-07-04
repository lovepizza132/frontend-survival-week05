import Food from '../types/Food';

type OrderButtonProps = {
  foods: Food[];
  onClick: () => void;
}

export default function OrderButton({
  foods, onClick,
}: OrderButtonProps) {
  const totalPrice = foods.reduce((acc: number, food: Food) => acc + food.price, 0);

  return (
    <button
      type="button"
      onClick={onClick}
    >
      합계:
      {' '}
      {totalPrice.toLocaleString()}
      원 주문
    </button>
  );
}
