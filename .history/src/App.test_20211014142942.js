import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />)
  const checkTest = screen.getByText(/Learn Angular/i)
  expect(checkTest).toBeInTheDocument()
});
