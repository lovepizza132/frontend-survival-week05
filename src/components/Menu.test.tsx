import { render, screen } from '@testing-library/react';
import Menu from './Menu';
import fixtures from '../../fixtures';
import Food from '../types/Food';

const context = describe;

describe('Menu', () => {
  context('with Menu', () => {
    const { foods } = fixtures;

    it('renders Menu', () => {
      render((
        <Menu
          menu={foods}
        />
      ));

      screen.getByText(/짜장면/);
      screen.getByText(/짬뽕/);
    });
  });

  context('without Menu', () => {
    it('renders no menu text', () => {
      const foods: Food[] = [];

      render((
        <Menu
          menu={foods}
        />
      ));

      screen.getByText('메뉴가 존재하지 않습니다');
    });
  });
});
