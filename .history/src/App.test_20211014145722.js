import { render, screen } from '@testing-library/react';
import App from './App';

describe("App", () => {
  it('should render App component', () => {
    render(<App />);
    expect(screen.getByText(/Search:/i)).toBeInTheDocument();
    screen.getByRole('textbox');
  })
})