// @vitest-environment happy-dom
import '@testing-library/jest-dom';

import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '.';
import { render } from './test/utilities';

test.skip('it should render the component', () => {
  render(<Counter />);
});

test.skip('it should increment when the "Increment" button is pressed', async () => {
  const { user } = render(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  const buttom = screen.getByRole('button', { name: 'Increment' });
  await user.click(buttom)

  expect(currentCount).toHaveTextContent('1');
});
