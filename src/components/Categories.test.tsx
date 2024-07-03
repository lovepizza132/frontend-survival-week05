import { render, screen } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  const categories = ['한식, 중식, 일식'];
  const setFilterCategory = jest.fn();

  function rednerCategories() {
    render((
      <Categories
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
    ));
  }

  it("includes '전체' in Categories", () => {
    rednerCategories();

    screen.getByText('전체');
  });

  it('renders all categories', () => {
    rednerCategories();

    categories.forEach((category) => {
      screen.getByText(category);
    });
  });
});
