import { useInterval, useLocalStorage } from 'usehooks-ts';
import useFetchRestaurants from './hooks/useFetchRestaurants';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';
import Cart from './components/Cart';
import Receipt from './types/Receipt';
import ReceiptPrinter from './components/ReceiptPrinter';

const emptyReceipt = {} as Receipt;

export default function App() {
  const restaurants = useFetchRestaurants();
  const [receipt, setReceipt] = useLocalStorage('receipt', emptyReceipt);

  useInterval(() => {
    setReceipt(emptyReceipt);
  }, receipt.id ? 5000 : null);

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <Cart
        setReceipt={setReceipt}
      />
      <FilterableRestaurantTable
        restaurants={restaurants}
      />
      <ReceiptPrinter
        receipt={receipt}
      />
    </div>
  );
}
