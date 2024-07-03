import { render, screen, fireEvent } from '@testing-library/react';
import TextField from './TextField';

const context = describe;

describe('TextField', () => {
  const label = 'search';
  const placeholder = 'test';
  const text = 'text';
  const setText = jest.fn();

  function renderTextField() {
    render((
      <TextField
        label={label}
        placeholder={placeholder}
        text={text}
        setText={setText}

      />
    ));
  }

  function inputText(value: string) {
    fireEvent.change(screen.getByLabelText(value), {
      target: { value: 'New Restaurant' },
    });
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders TextField', () => {
    renderTextField();

    screen.getByLabelText('search');
    screen.getAllByDisplayValue(text);
    screen.getByPlaceholderText(/test/);
  });

  context('when users types text', () => {
    beforeEach(() => {
      renderTextField();
    });

    it('calls the change handler', () => {
      inputText(label);

      expect(setText).toBeCalledWith('New Restaurant');
    });
  });
});
