import { render, screen, fireEvent } from '@testing-library/react';
import Category from './Category';

describe('Category', () => {
  const category = '한식';
  const setFilterCategory = jest.fn();

  function renderCategory() {
    render((
      <Category
        key={category}
        category={category}
        setFilterCategory={setFilterCategory}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders category text', () => {
    renderCategory();

    screen.getByText('한식');
  });

  it('listen for category click event', () => {
    renderCategory();

    fireEvent.click(screen.getByText('한식'));

    expect(setFilterCategory).toBeCalledWith(category);
  });
});
