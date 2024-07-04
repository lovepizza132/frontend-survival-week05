import { useLocalStorage } from 'usehooks-ts';
import Food from '../types/Food';
import CartItem from './CartItem';
import OrderButton from './OrderButton';
import useCreateOrder from '../hooks/useCreateOrder';
import Receipt from '../types/Receipt';

type CartProps = {
  setReceipt: (receipt: Receipt) => void;
}

export default function Cart({ setReceipt }: CartProps) {
  const [selectedFoods, setFood] = useLocalStorage<Food[]>('cart', []);
  const { createOrder } = useCreateOrder();

  const handleClickCancel = (index: number) => {
    const foods = selectedFoods.filter((_, idx) => idx !== index);
    setFood(foods);
  };

  const handleClick = async () => {
    const receipt = await createOrder(selectedFoods);
    setReceipt(receipt);
    setFood([]);
  };

  return (
    <div>
      <h2>주문 바구니</h2>
      <ul
        style={{
          width: '20%',
          listStyleType: 'none',
        }}
      >
        {[...selectedFoods].map((food: Food, index: number) => {
          const id = `${food.id}-${index}`;

          return (
            <CartItem
              key={id}
              food={food}
              index={index}
              onClickCancel={handleClickCancel}
            />
          );
        })}
      </ul>
      <OrderButton
        foods={selectedFoods}
        onClick={handleClick}
      />
    </div>
  );
}
