import { render, screen } from '@testing-library/react';
import MenuItem from './MenuItem';

describe('MenuItem', () => {
  const food = {
    id: 'FOOD_ID',
    name: '짜장면',
    price: 8_000,
  };

  it('render food information', () => {
    render((
      <MenuItem
        food={food}
      />
    ));

    screen.getByText('짜장면(8,000원)');
  });

  it('render children', () => {
    render((
      <MenuItem
        food={food}
      >
        <span>test</span>
      </MenuItem>
    ));

    screen.getByText('test');
  });
});
