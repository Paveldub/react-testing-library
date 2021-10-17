import { render, screen } from '@testing-library/react';
import App from './App';

describe("App", () => {
  it('should render App component', () => {
    render(<App />);
    screen.debug();
    expect(screen.getByText(/Seacrch:/i)).toBeInTheDocument();
  })
})