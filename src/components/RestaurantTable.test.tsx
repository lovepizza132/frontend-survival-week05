import { render, screen } from '@testing-library/react';
import RestaurantTable from './RestaurantTable';
import fixtures from '../../fixtures';

describe('RestaurantTable', () => {
  it('renders table headers', () => {
    const { restaurants } = fixtures;
    render((
      <RestaurantTable
        restaurants={restaurants}
      />
    ));

    screen.getByText('식당 이름');
    screen.getByText('종류');
    screen.getByText('메뉴');
  });
});
