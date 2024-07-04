import Food from '../types/Food';
import Receipt from '../types/Receipt';
import MenuItem from './MenuItem';

type ReceiptPrinterProps = {
  receipt: Receipt
}

export default function ReceiptPrinter({
  receipt,
}: ReceiptPrinterProps) {
  const { id, menu, totalPrice } = receipt;

  if (id === undefined) {
    return <p>[영수증 나오는 곳]</p>;
  }

  return (
    <div>
      <h2>영수증</h2>
      <div>
        <h3>주문번호</h3>
        <p>{id}</p>
      </div>
      <div>
        <h3>주문목록</h3>
        <ul style={{
          padding: 0,
          listStyle: 'none',
        }}
        >
          {menu.map((food: Food, index: number) => {
            const key = `${food.id}-${index}`;

            return (
              <MenuItem
                key={key}
                food={food}
              />

            );
          })}
        </ul>
      </div>
      <p>
        총 가격:
        {' '}
        {totalPrice.toLocaleString()}
      </p>
    </div>
  );
}
